const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'reports/',      // Folder where JSON reports are stored
  reportPath: 'reports/',   // Output folder for the HTML report
  metadata: {
    browser: {
      name: 'chromium',
      version: 'latest',
    },
    device: 'Local Test Machine',
    platform: {
      name: process.platform,
      version: process.version,
    },
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'My Playwright Cucumber Tests' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Execution Start Time', value: new Date().toLocaleString() },
    ],
  },
});
