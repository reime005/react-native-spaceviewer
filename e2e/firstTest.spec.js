import Axios from 'axios';

if (!process.env.E2E_DEVICE) {

  var nextLaunchId = -1;

  describe('Example', () => {
    beforeAll(async () => {
      try {
        const response = await Axios.get('https://launchlibrary.net/1.4/launch\?next\=1');
        nextLaunchId = response.data &&
          response.data.launches && 
          response.data.launches[0] && 
          response.data.launches[0].id;
      }
      catch(error) {
        console.error(error);
      }
    });

    beforeEach(async () => {
      await device.reloadReactNative();
    });

    async function screenIsThere(screen = 'Upcoming') {
      const lower = screen.toLowerCase();
  
      const viewLabel = `${lower}-screen`;
      let tabBtn = `tab-btn-${screen}`;
  
      await expect(element(by.id(tabBtn)).atIndex(0)).toBeVisible();
      await element(by.id(tabBtn)).atIndex(0).tap();
  
      await expect(element(by.id(viewLabel)).atIndex(0)).toBeVisible();
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
      await expect(element(by.id(`list-item-${nextLaunchId}`)).atIndex(0)).toBeVisible();
      await element(by.id(`list-item-${nextLaunchId}`)).atIndex(0).tap();
    });
  });
} else {
  //only a placeholder, to not screw up your tests
  describe('Hack', () => {
    it('passes', async () => {

    });
  });
}