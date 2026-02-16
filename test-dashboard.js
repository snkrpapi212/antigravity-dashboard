const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const consoleMessages = [];
  page.on('console', msg => {
    consoleMessages.push({ type: msg.type(), text: msg.text() });
    console.log(`[BROWSER ${msg.type().toUpperCase()}] ${msg.text()}`);
  });

  page.on('pageerror', err => {
    console.log(`[BROWSER PAGE-ERROR] ${err.message}`);
    process.exit(1);
  });

  try {
    await page.goto('http://localhost:8000', { waitUntil: 'networkidle' });
    
    // Give Babel and React time to settle
    await page.waitForTimeout(4000);

    // Check if the root has content
    const content = await page.textContent('#root');
    if (!content || content.length < 500) {
      console.error("FAIL: Root content is too short or empty.");
      process.exit(1);
    }

    // Check for specific Enterprise UI elements
    const sidebar = await page.locator('nav').isVisible();
    const kpiCards = await page.locator('.widget-card').count();
    const charts = await page.locator('.recharts-responsive-container').count();

    console.log(`Sidebar visible: ${sidebar}`);
    console.log(`KPI Cards: ${kpiCards}`);
    console.log(`Charts: ${charts}`);

    if (!sidebar || kpiCards < 4 || charts < 2) {
      console.error("FAIL: Missing essential UI components.");
      process.exit(1);
    }

    // Test Navigation
    await page.click('text=Analytics');
    await page.waitForTimeout(1000);
    const isAnalyticsLoading = await page.textContent('main');
    if (!isAnalyticsLoading.includes('Loading analytics module')) {
        console.error("FAIL: Navigation did not trigger view change.");
        process.exit(1);
    }

    console.log("SUCCESS: Dashboard passed automated visual and functional check.");
    process.exit(0);
  } catch (e) {
    console.error(`TEST EXCEPTION: ${e.message}`);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
