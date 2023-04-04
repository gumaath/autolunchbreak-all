import puppeteer from 'puppeteer';
import { createRequire } from "module";

(async () => {
  const require = createRequire(import.meta.url);
  const credentials = require("./credentials.json");

  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  const email = credentials.email;
  const password = credentials.password;

  await page.goto('https://www.bitrix24.net/');

  // Set screen size
  await page.setViewport({width: 1080, height: 1300});

  // Type into search box
  await page.waitForSelector('#login');
  await page.type('#login', email);

  const submit = await page.waitForSelector('button.ui-btn-success[data-action=submit]');

  await page.waitForTimeout(2000);
  await submit.click();

  await page.waitForSelector('#password');
  await page.type('#password', password);

  const submitpass = await page.waitForSelector('button.ui-btn-success[data-action=submit]');
  await page.waitForTimeout(2000);
  await submitpass.click();

  const allstrategy = await page.waitForSelector('a.ui-btn');
  await page.waitForTimeout(2000);
  await allstrategy.click();


  const pausecontainer = await page.waitForSelector('#timeman-container');
  await page.waitForTimeout(2000);
  await pausecontainer.click();

  const pause = await page.waitForSelector('.tm-btn-start');
  await page.waitForTimeout(2000);
  await pause.click();

  console.log("Hora de trabalho retomada/pausada");
  await browser.close();
})();

