import * as dotenv from "dotenv";
import { Before, After, Status } from "@cucumber/cucumber";
import { Browser, chromium, Page } from "playwright";
import { setDefaultTimeout } from "@cucumber/cucumber";
dotenv.config();

const GLOBAL_TIMEOUT = Number(process.env.GLOBAL_TIMEOUT!);
setDefaultTimeout(GLOBAL_TIMEOUT * 1000); // 30 seconds timeout

const keepBrowser = process.env.KEEP_BROWSER === "true";
const isHeadless = !process.argv.includes("--headed"); // default is headless unless --headed is passed

interface CustomWorld {
  browser?: Browser;
  page?: Page;
}

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({ headless: isHeadless });
  const context = await this.browser.newContext();
  this.page = await context.newPage();
  this.page.setDefaultNavigationTimeout(GLOBAL_TIMEOUT * 1000); // Set 60s timeout
  await context.tracing.start({ screenshots: true, snapshots: true });
});

After(async function (this: CustomWorld, scenario) {
  if (keepBrowser) {
    console.log("🧪 Skipping browser cleanup due to KEEP_BROWSER=true");
    return;
  }
  if (scenario.result?.status === Status.FAILED && this.page) {
    await this.page.context().tracing.stop({
      path: `traces/${scenario.pickle.name.replace(/\s+/g, "_")}.zip`,
    });
  } else {
    await this.page?.context().tracing.stop();
  }

  await this.browser?.close();
});
