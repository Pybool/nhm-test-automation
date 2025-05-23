# 🧪 NHM Test Automation

This project uses **Cucumber.js**, **Playwright**, and **multiple-cucumber-html-reporter** to automate and test your web and mobile platforms.

---

## 📦 Scripts

All test scripts are defined in `package.json`. Below is a guide to what each script does:

### ✅ Run Tests

| Script                      | Description                                               |
|-----------------------------|-----------------------------------------------------------|
| `npm run web-only`          | Run only web tests in headless mode and generate report.                      |
| `npm run mobile-only`       | Run only mobile tests in headless and generate report.                  |
| `npm run all`               | Run all tests (web + mobile) in headless and generate report.         |
| `npm run web-only:headed`   | Run web tests and generate report. **with visible browser window**.            |
| `npm run mobile-only:headed`| Run mobile tests and generate report. **with visible browser window**.         |
| `npm run all:headed`        | Run all tests with and generate report. **browser visible**.                   |

Each run also generates a beautiful HTML report based on the test profile.

---

### 📊 Generate Reports

You can regenerate reports manually:

- `npm run generate-report` – Generate report for the last test run using CLI arguments.
- `npm run generate-multi-report` – If using a combined report strategy (optional).

Reports are saved in the `reports/` directory.

---

## ⚙️ Environment Configuration

A `.env` file in the project root allows you to control behavior:

```ini
# .env

KEEP_BROWSER=false     # If true, browser will remain open after tests finish
GLOBAL_TIMEOUT=60      # Step timeout in seconds (used by Cucumber)
