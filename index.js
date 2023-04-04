import puppeteer from 'puppeteer';
import { createRequire } from "module";

(async () => {
  const require = createRequire(import.meta.url);
  const credentials = require("./credentials.json");
  const headless = true; // Mude para ver o navegador

  const browser = await puppeteer.launch({headless: headless});
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


  const pausecontainer = await page.waitForSelector('.timeman-container');
  await page.waitForTimeout(15000);
  await pausecontainer.click();

  const pause = await page.waitForSelector('.tm-popup-timeman-layout-time > button');
  await page.waitForTimeout(4000);
  await pause.click();

  console.log("Hora de trabalho retomada/pausada");
  await browser.close();
})();

