const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => {
    if (m.type() === 'error') errors.push(m.text());
  });

  try {
    await page.goto('http://localhost:8000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1800);

    const title = await page.title();
    const kpis = await page.locator('text=Revenue').count();
    const charts = await page.locator('.recharts-responsive-container').count();
    const dateFilter = await page.locator('label:has-text("Date Range")').count();
    const catFilter = await page.locator('label:has-text("Category")').count();

    if (!title.includes('Antigravity')) throw new Error('Title mismatch');
    if (kpis < 1) throw new Error('KPI cards not rendered');
    if (charts < 2) throw new Error('Expected at least 2 charts');
    if (dateFilter < 1 || catFilter < 1) throw new Error('Filter bar missing');
    if (errors.length) throw new Error(`Browser errors detected: ${errors.join(' | ')}`);

    await page.screenshot({ path: '/data/workspace/antigravity-dashboard/dashboard-proof.png', fullPage: true });
    console.log('PASS: dashboard loaded and validated');
    process.exit(0);
  } catch (err) {
    console.error('FAIL:', err.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
