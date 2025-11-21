export default {
  // This runs before the story is visited
  async preVisit(page) {
    // Add initialization script to ensure __test is defined
    // This resolves the "__test is not defined" error
    await page.addInitScript(() => {
      if (typeof window !== 'undefined') {
        window.__test = window.__test || {};
      }
    });
  },
};

