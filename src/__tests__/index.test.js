import wd from 'wd';
import server from '../../test-config/server';
import capabilities from '../../test-config/capabilities';
import Axios from 'axios';

const fs = require('fs');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 5 * 60 * 1000;

const driver = wd.promiseChainRemote(server.url, server.port);

var nextLaunchId = -1;

describe('App', () => {
  beforeAll(async () => {
    try {
      const response = await Axios.get('https://launchlibrary.net/1.4/launch\?next\=1');
      nextLaunchId = response.data &&
        response.data.launches && 
        response.data.launches[0] && 
        response.data.launches[0].id;

      await driver.init(capabilities);

      await driver.sleep(5000);
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
    const tabBtn = `tab-btn-${screen}`;

    const element = await driver.elementByAccessibilityId(tabBtn);

    await element.click();

    await driver.sleep(1500);

    expect(typeof await driver.elementByAccessibilityId(viewLabel) !== 'undefined').toBe(true);

    await driver.takeScreenshot((err, screenshot) => {
      fs.writeFile(`${lower}-screen.png`, screenshot, 'base64', (err) => {  
        if (err) throw err;
      });
    });
  }

  // it('test', async () => {
  //   const element = await driver.elementByAccessibilityId('tab-btn-Search');

  //   await element.click();

  //   await driver.sleep(1500);

  //   expect(typeof await driver.elementByAccessibilityId('search-screen') !== 'undefined').toBe(true);
  // })

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
    
    const element = await driver.elementByAccessibilityId(`list-item-${nextLaunchId}`);

    await element.click();

    await driver.sleep(1500);
    
    await driver.takeScreenshot((err, screenshot) => {
      fs.writeFile(`details-${nextLaunchId}-screen.png`, screenshot, 'base64', (err) => {  
        if (err) throw err;
      });
    });
  });
});
