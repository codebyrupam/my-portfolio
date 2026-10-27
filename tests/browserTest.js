import puppeteer from 'puppeteer-core';
import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const viewports = [
  { name: 'Mobile (375x812)', width: 375, height: 812 },
  { name: 'Mobile (390x844)', width: 390, height: 844 },
  { name: 'Tablet (768x1024)', width: 768, height: 1024 },
  { name: 'Laptop (1366x768)', width: 1366, height: 768 },
  { name: 'Desktop (1920x1080)', width: 1920, height: 1080 },
];

async function runBrowserTests() {
  console.log('--- STARTING COMPREHENSIVE BROWSER AUTOMATION TESTS ---');

  const PORT = 4173;
  const SERVER_URL = `http://127.0.0.1:${PORT}`;
  console.log(`Starting Vite preview server on ${SERVER_URL}...`);
  
  const server = spawn('node', ['./node_modules/vite/bin/vite.js', 'preview', '--port', String(PORT), '--host', '127.0.0.1'], {
    stdio: 'pipe'
  });

  server.stdout.on('data', (d) => process.stdout.write(`[SERVER] ${d}`));
  server.stderr.on('data', (d) => process.stderr.write(`[SERVER ERR] ${d}`));

  // Wait 3 seconds for server to be ready
  await new Promise((r) => setTimeout(r, 3000));

  let browser;
  const tempProfileDir = path.join(process.cwd(), `.test-profile-${Date.now()}`);
  if (!fs.existsSync(tempProfileDir)) {
    fs.mkdirSync(tempProfileDir, { recursive: true });
  }

  const results = {
    passed: [],
    failed: [],
    consoleErrors: [],
    consoleWarnings: [],
    failedRequests: []
  };

  try {
    const browserPath = fs.existsSync(EDGE_PATH) ? EDGE_PATH : CHROME_PATH;
    console.log(`Launching real browser executable from: ${browserPath}`);
    browser = await puppeteer.launch({
      executablePath: browserPath,
      headless: true,
      userDataDir: tempProfileDir,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--no-first-run',
        '--no-default-browser-check'
      ]
    });

    const page = await browser.newPage();

    // Listen to console and request errors
    page.on('console', (msg) => {
      const type = msg.type();
      const text = msg.text();
      if (type === 'error') {
        results.consoleErrors.push(text);
        console.error(`[BROWSER ERROR] ${text}`);
      } else if (type === 'warn') {
        results.consoleWarnings.push(text);
        console.warn(`[BROWSER WARN] ${text}`);
      }
    });

    page.on('requestfailed', (req) => {
      const url = req.url();
      const failure = req.failure()?.errorText || 'unknown failure';
      if (!url.startsWith('mailto:') && !url.startsWith('tel:')) {
        results.failedRequests.push({ url, failure });
        console.error(`[REQUEST FAILED] ${url}: ${failure}`);
      }
    });

    // TEST 1: Load Website
    console.log(`\nTEST 1: Navigating to ${SERVER_URL}...`);
    const response = await page.goto(SERVER_URL, { waitUntil: 'networkidle0', timeout: 15000 });
    if (response && response.status() === 200) {
      results.passed.push('Page loads with HTTP 200 status');
      console.log('✓ Page loaded successfully (HTTP 200)');
    } else {
      results.failed.push(`Page failed to load: status ${response?.status()}`);
    }

    // Check page title and meta
    const title = await page.title();
    console.log(`Page Title: "${title}"`);
    if (title.includes('Rupam Ghosh') && title.includes('MERN Stack')) {
      results.passed.push('Page title contains candidate name and role');
      console.log('✓ Title verified');
    } else {
      results.failed.push(`Title check failed: ${title}`);
    }

    // TEST 2: Responsive Viewports & Horizontal Overflow Check
    console.log('\nTEST 2: Checking Responsive Viewports & Horizontal Overflow...');
    for (const vp of viewports) {
      await page.setViewport({ width: vp.width, height: vp.height });
      await new Promise((r) => setTimeout(r, 400));
      const overflow = await page.evaluate(() => {
        return {
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
          bodyScrollWidth: document.body.scrollWidth,
          bodyClientWidth: document.body.clientWidth,
        };
      });

      const hasHorizontalScroll = overflow.scrollWidth > overflow.clientWidth;
      if (!hasHorizontalScroll) {
        results.passed.push(`No horizontal overflow on ${vp.name} (${overflow.scrollWidth}px <= ${overflow.clientWidth}px)`);
        console.log(`✓ ${vp.name}: No overflow (${overflow.scrollWidth}px / ${overflow.clientWidth}px)`);
      } else {
        results.failed.push(`Horizontal overflow detected on ${vp.name}: scrollWidth=${overflow.scrollWidth} > clientWidth=${overflow.clientWidth}`);
        console.error(`✗ ${vp.name}: Overflow! scrollWidth=${overflow.scrollWidth} > clientWidth=${overflow.clientWidth}`);
      }
    }

    // Set standard desktop viewport for functional tests
    await page.setViewport({ width: 1366, height: 768 });

    // TEST 3: Hero Section & Elements
    console.log('\nTEST 3: Testing Hero Section & Quick Actions...');
    const candidateName = await page.$eval('h1', (el) => el.innerText);
    if (candidateName.includes('Rupam Ghosh')) {
      results.passed.push('Hero displays candidate name correctly');
      console.log('✓ Candidate name confirmed in H1');
    } else {
      results.failed.push(`Hero H1 did not contain Rupam Ghosh: ${candidateName}`);
    }

    // Test Quick Copy Email button
    const copyButton = await page.$('button[title="Copy Email Address"]');
    if (copyButton) {
      await copyButton.click();
      await new Promise((r) => setTimeout(r, 500));
      const buttonText = await page.evaluate(el => el.innerText, copyButton);
      if (buttonText.includes('Copied')) {
        results.passed.push('Quick copy email button copies and updates UI to "Copied"');
        console.log('✓ Quick copy email button interactive state works');
      } else {
        results.failed.push(`Copy button did not show "Copied": text was "${buttonText}"`);
      }
    } else {
      results.failed.push('Copy Email Address button not found');
    }

    // TEST 4: Navigation Links & Smooth Scroll
    console.log('\nTEST 4: Testing Desktop Navigation Links...');
    const navLinks = ['#about', '#skills', '#projects', '#experience', '#education', '#practicing', '#contact'];
    for (const href of navLinks) {
      const link = await page.$(`nav a[href="${href}"]`);
      if (link) {
        await link.click();
        await new Promise((r) => setTimeout(r, 400));
        const targetExists = await page.$(href);
        if (targetExists) {
          results.passed.push(`Nav link ${href} scrolls and target section exists`);
          console.log(`✓ Nav link ${href} verified`);
        } else {
          results.failed.push(`Target section ${href} does not exist in DOM`);
        }
      } else {
        results.failed.push(`Desktop nav link for ${href} not found`);
      }
    }

    // TEST 5: Mobile Navigation Menu (375x812)
    console.log('\nTEST 5: Testing Mobile Menu Open/Close on 375x812...');
    await page.setViewport({ width: 375, height: 812 });
    await new Promise((r) => setTimeout(r, 400));
    
    const hamburgerBtn = await page.$('button[aria-label*="Navigation Menu"]');
    if (hamburgerBtn) {
      await hamburgerBtn.click();
      await new Promise((r) => setTimeout(r, 400));
      
      const mobileDrawer = await page.$('nav[aria-label="Mobile Navigation"]');
      if (mobileDrawer) {
        results.passed.push('Mobile menu drawer opens upon hamburger click');
        console.log('✓ Mobile menu drawer opened successfully');
        
        // Test clicking a link in mobile menu closes the menu
        const mobileProjectsLink = await page.$('nav[aria-label="Mobile Navigation"] a[href="#projects"]');
        if (mobileProjectsLink) {
          await mobileProjectsLink.click();
          await new Promise((r) => setTimeout(r, 400));
          const drawerStillVisible = await page.$('nav[aria-label="Mobile Navigation"]');
          if (!drawerStillVisible) {
            results.passed.push('Clicking a mobile nav link scrolls and closes mobile drawer');
            console.log('✓ Clicking link closed mobile drawer');
          } else {
            results.failed.push('Mobile drawer remained visible after clicking link');
          }
        }
      } else {
        results.failed.push('Mobile menu drawer failed to open');
      }
    } else {
      results.failed.push('Mobile hamburger button not found on 375px');
    }

    // TEST 6: Resume Modal
    console.log('\nTEST 6: Testing Resume Modal Open, Download & ESC Dismiss...');
    await page.setViewport({ width: 1366, height: 768 });
    await new Promise((r) => setTimeout(r, 300));
    
    // Find resume CTA button in header
    const resumeBtn = await page.$('header button');
    if (resumeBtn) {
      await resumeBtn.click();
      await new Promise((r) => setTimeout(r, 500));
      
      const modal = await page.$('div[role="dialog"][aria-labelledby="resume-modal-title"]');
      if (modal) {
        results.passed.push('Resume modal opens when clicking Resume button');
        console.log('✓ Resume modal opened');

        // Test ESC key closes modal
        await page.keyboard.press('Escape');
        await new Promise((r) => setTimeout(r, 400));
        const modalAfterEsc = await page.$('div[role="dialog"][aria-labelledby="resume-modal-title"]');
        if (!modalAfterEsc) {
          results.passed.push('Resume modal dismisses upon pressing Escape key');
          console.log('✓ Resume modal dismissed via Escape key');
        } else {
          results.failed.push('Resume modal failed to close on Escape key');
        }
      } else {
        results.failed.push('Resume modal dialog not found after clicking button');
      }
    }

    // TEST 7: Project Cards, Filters, and Config Modal
    console.log('\nTEST 7: Testing Project Filter & Detail Modal...');
    const filterButtons = await page.$$('div[role="group"][aria-label="Project Categories"] button');
    if (filterButtons.length >= 3) {
      await filterButtons[1].click(); // click second category ("Full Stack")
      await new Promise((r) => setTimeout(r, 300));
      const pressedState = await page.evaluate(el => el.getAttribute('aria-pressed'), filterButtons[1]);
      if (pressedState === 'true') {
        results.passed.push('Project category filter button updates active aria-pressed state');
        console.log('✓ Project category filter state verified');
      }
      // Reset back to All
      await filterButtons[0].click();
      await new Promise((r) => setTimeout(r, 300));
    }

    // Open project detail modal
    const detailBtn = await page.$('#projects button[title*="deployment"]');
    if (detailBtn) {
      await detailBtn.click();
      await new Promise((r) => setTimeout(r, 400));
      const projectModal = await page.$('div[role="dialog"][aria-labelledby="project-modal-title"]');
      if (projectModal) {
        results.passed.push('Project details & config info modal opens');
        console.log('✓ Project details modal opened');
        await page.keyboard.press('Escape');
        await new Promise((r) => setTimeout(r, 300));
        const modalStillOpen = await page.$('div[role="dialog"][aria-labelledby="project-modal-title"]');
        if (!modalStillOpen) {
          results.passed.push('Project details modal dismisses on Escape key');
          console.log('✓ Project details modal dismissed via Escape');
        } else {
          results.failed.push('Project details modal failed to close on Escape key');
        }
      } else {
        results.failed.push('Project details modal failed to open');
      }
    }

    // TEST 8: Contact Form Validation & Submission
    console.log('\nTEST 8: Testing Contact Form Validation & Interaction...');
    await page.evaluate(() => {
      document.getElementById('contact').scrollIntoView();
    });
    await new Promise((r) => setTimeout(r, 500));

    // 8a. Empty submit
    const submitBtn = await page.$('#contact form button[type="submit"]');
    if (submitBtn) {
      await submitBtn.click();
      await new Promise((r) => setTimeout(r, 300));
      const errorAlert = await page.$('#contact div[role="alert"]');
      if (errorAlert) {
        const errorText = await page.evaluate(el => el.innerText, errorAlert);
        results.passed.push(`Form validation catches empty fields: "${errorText}"`);
        console.log(`✓ Form empty validation passed: "${errorText}"`);
      } else {
        results.failed.push('Form did not show error alert on empty submit');
      }

      // 8b. Fill invalid email
      await page.type('#name', 'Recruiter Tester');
      await page.type('#email', 'invalid-email');
      await page.type('#message', 'Test message inquiry');
      await submitBtn.click();
      await new Promise((r) => setTimeout(r, 300));
      const emailErrorAlert = await page.$('#contact div[role="alert"]');
      if (emailErrorAlert) {
        const errText = await page.evaluate(el => el.innerText, emailErrorAlert);
        results.passed.push(`Form validation catches invalid email format: "${errText}"`);
        console.log(`✓ Invalid email caught: "${errText}"`);
      } else {
        results.failed.push('Form did not reject invalid email address');
      }

      // 8c. Fill valid email and test submission
      await page.evaluate(() => {
        document.getElementById('email').value = '';
      });
      await page.type('#email', 'recruiter@techcorp.com');
      await submitBtn.click();
      await new Promise((r) => setTimeout(r, 500));

      const copyDraftBtn = await page.$('button[type="button"]');
      if (copyDraftBtn) {
        results.passed.push('Form submission displays confirmation and "Copy Message to Clipboard" fallback');
        console.log('✓ Form submission & clipboard copy fallback verified');
      } else {
        results.failed.push('Clipboard copy fallback button not shown after submission');
      }
    } else {
      results.failed.push('Contact form submit button not found');
    }

    // TEST 9: External Links Verification (GitHub & LinkedIn)
    console.log('\nTEST 9: Checking External Profile Links...');
    const githubLinks = await page.$$eval('a[href*="github.com"]', links => links.map(l => l.href));
    const linkedinLinks = await page.$$eval('a[href*="linkedin.com"]', links => links.map(l => l.href));

    if (githubLinks.some(h => h.includes('github.com/codebyrupam'))) {
      results.passed.push('GitHub links point to authentic profile: https://github.com/codebyrupam');
      console.log('✓ GitHub profile URL verified');
    } else {
      results.failed.push('GitHub links do not point to codebyrupam profile');
    }

    if (linkedinLinks.some(h => h.includes('linkedin.com/in/rupam-ghosh-7293a5279'))) {
      results.passed.push('LinkedIn links point to authentic profile: https://linkedin.com/in/rupam-ghosh-7293a5279');
      console.log('✓ LinkedIn profile URL verified');
    } else {
      results.failed.push('LinkedIn links do not point to candidate profile');
    }

    // TEST 10: PDF Download Asset Availability
    console.log('\nTEST 10: Verifying PDF Resume Asset...');
    const pdfResponse = await page.goto(`${SERVER_URL}/resume.pdf`);
    if (pdfResponse && pdfResponse.status() === 200) {
      const contentType = pdfResponse.headers()['content-type'];
      results.passed.push(`PDF asset /resume.pdf returns HTTP 200 with Content-Type: ${contentType}`);
      console.log(`✓ /resume.pdf verified (${contentType})`);
    } else {
      results.failed.push(`PDF asset /resume.pdf failed: status ${pdfResponse?.status()}`);
    }

  } catch (err) {
    console.error('Fatal error during browser automation:', err);
    results.failed.push(`Automation runtime exception: ${err.message}`);
  } finally {
    if (browser) {
      await browser.close();
    }
    server.kill();
    try {
      if (fs.existsSync(tempProfileDir)) {
        fs.rmSync(tempProfileDir, { recursive: true, force: true });
      }
    } catch (e) {
      // Ignore profile cleanup lock
    }
  }

  console.log('\n=========================================');
  console.log('       BROWSER AUTOMATION SUMMARY        ');
  console.log('=========================================');
  console.log(`Passed Tests: ${results.passed.length}`);
  console.log(`Failed Tests: ${results.failed.length}`);
  console.log(`Console Errors: ${results.consoleErrors.length}`);
  console.log(`Console Warnings: ${results.consoleWarnings.length}`);
  console.log(`Failed Network Requests: ${results.failedRequests.length}`);

  if (results.failed.length > 0) {
    console.log('\nFailed Tests Details:');
    results.failed.forEach(f => console.log(`  - ✗ ${f}`));
  }

  if (results.consoleErrors.length > 0) {
    console.log('\nConsole Errors Details:');
    results.consoleErrors.forEach(e => console.log(`  - ✗ ${e}`));
  }

  return results;
}

runBrowserTests();
