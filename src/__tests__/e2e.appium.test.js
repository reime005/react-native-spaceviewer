/* eslint-disable */

import wd from 'wd';
import server from '../../test-config/server';
import capabilities from '../../test-config/capabilities';

const fs = require('fs');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 5 * 60 * 1000;

const driver = wd.promiseChainRemote(server.url, server.port);

let nextLaunchId = -1;

describe('App', () => {
  beforeAll(async () => {
    try {
      const response = await fetch(
        'https://launchlibrary.net/1.4/launch?next=1'
      );

      const data = await response.json();

      nextLaunchId = idx(data, _ => _.launches[0].id);

      await driver.init(capabilities);

      await driver.sleep(15000);
    } catch (error) {
      console.error(error);
    }
  });

  afterAll(async () => {
    try {
      await driver.quit();
    } catch (error) {
      console.error(error);
    }
  });

  async function screenIsThere(screen = 'Upcoming') {
    const lower = screen.toLowerCase();

    const viewLabel = `${lower}-screen`;
    let tabBtn = `tab-btn-${screen}`;

    //TODO: hack (issue on iOS, doubled ID, probably caused by nesting views)
    if (/ios/.test(process.env.E2E_DEVICE)) {
      tabBtn = `${tabBtn} ${tabBtn}`;
    }

    const element = await driver.elementByAccessibilityId(tabBtn);

    await element.click();

    await driver.sleep(1500);

    expect(
      typeof (await driver.elementByAccessibilityId(viewLabel)) !== 'undefined'
    ).toBe(true);

    await driver.takeScreenshot((err, screenshot) => {
      fs.writeFile(`${lower}-screen.png`, screenshot, 'base64', err => {
        if (err) {
          throw err;
        }
      });
    });
  }

  it('settings screen should render correctly', async () => {
    await screenIsThere('Settings');
  });

  it('previous screen should render correctly', async () => {
    await screenIsThere('Previous');
  });

  it('search screen should render correctly', async () => {
    await screenIsThere('Search');
  });

  it('upcoming details screen should render correctly', async () => {
    await screenIsThere('Upcoming');

    // renderer should now be on the upcoming screen

    await driver.sleep(1500);

    const element = await driver.elementByAccessibilityId(
      `list-item-${nextLaunchId}`
    );

    await element.click();

    await driver.sleep(1500);

    await driver.takeScreenshot((err, screenshot) => {
      fs.writeFile(
        `details-${nextLaunchId}-screen.png`,
        screenshot,
        'base64',
        err => {
          if (err) {
            throw err;
          }
        }
      );
    });
  });
});
