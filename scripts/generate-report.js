const reporter = require('cucumber-html-reporter');

// Get profile from command-line arguments (e.g., --profile=web)
const args = process.argv.slice(2);
const profileArg = args.find(arg => arg.startsWith('--profile='));
const profile = profileArg ? profileArg.split('=')[1] : 'web'; // default to 'web'

// Construct filenames based on profile
const jsonFile = `reports/json/${profile}-report.json`;
const outputHtml = `reports/html/${profile}-report.html`;

const options = {
  theme: 'bootstrap',
  jsonFile,
  output: outputHtml,
  reportSuiteAsScenarios: true,
  launchReport: false,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "UAT",
    "Browser": "Chromium",
    "Platform": process.platform,
    "Parallel": "Scenarios",
    "Executed": "Local"
  }
};

reporter.generate(options);
