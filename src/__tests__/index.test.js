import wd from 'wd';
import server from '../../test-config/server';
import capabilities from '../../test-config/capabilities';

const fs = require('fs');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 5 * 60 * 1000;

const driver = wd.promiseChainRemote(server.url, server.port);

describe('App', () => {
  beforeAll(async () => {
    try {
      await driver.init(capabilities);

      await driver.sleep(7000);
    }
    catch(error) {
      console.error(error);
    }
  });

  afterAll(async () => {
    try {
      await driver.quit();
    }
    catch(error) {
      console.error(error);
    }
  });

  async function screenIsThere(screen = 'Upcoming') {
    const lower = screen.toLowerCase();
    const viewLabel = `${lower}-screen`;
    const tabBtn = `tab-btn-${screen} tab-btn-${screen}`;

    expect(await driver.hasElementByAccessibilityId(viewLabel)).toBe(false);
    expect(await driver.hasElementByAccessibilityId(tabBtn)).toBe(true);
    
    const element = await driver.elementByAccessibilityId(tabBtn);

    await element.click();

    await driver.sleep(1500);

    expect(await driver.hasElementByAccessibilityId(viewLabel)).toBe(true);

    await driver.takeScreenshot((err, screenshot) => {
      fs.writeFile(`${lower}-screen.png`, screenshot, 'base64', (err) => {  
        if (err) throw err;
      });
    });
  }

  it('settings screen should render correctly', async () => {
    await screenIsThere('Settings');
  });

  it('Upcoming screen should render correctly', async () => {
    await screenIsThere('Upcoming');
  });

  it('previous screen should render correctly', async () => {
    await screenIsThere('Previous');
  });

  it('search screen should render correctly', async () => {
    await screenIsThere('Search');
  });

  // it('initial screen should render correctly', async () => {
  //   await driver.sleep(1500);

  //   expect(await driver.hasElementByAccessibilityId('upcoming-screen')).toBe(true);

  //   await driver.sleep(1500);
    
  //   expect(await driver.hasElementByAccessibilityId('tab-btn-Upcoming tab-btn-Upcoming')).toBe(true);
  // });
});
