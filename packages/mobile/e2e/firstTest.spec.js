import idx from 'idx';

const fetch = require('node-fetch');

if (!process.env.E2E_DEVICE) {
  let nextLaunchId = -1;

  describe('Example', () => {
    beforeAll(async () => {
      try {
        const response = await fetch(
          'https://launchlibrary.net/1.4/launch?next=1'
        );

        const data = await response.json();

        nextLaunchId = idx(data, _ => _.launches[0].id);
      } catch (error) {
        console.error(error);
      }
    });

    beforeEach(async () => {
      //await device.reloadReactNative();
    });

    async function screenIsThere(screen = 'upcoming') {
      const viewLabel = `${screen}-screen`;
      let tabBtn = `tab-btn-${screen}`;

      await expect(element(by.id(tabBtn))).toBeVisible();
      await element(by.id(tabBtn)).tap();

      //HACK: hide auto-focused keyboard
      if (screen === 'search') {
        await element(by.id('searchInput')).typeText('\n');
      }

      await expect(element(by.id(viewLabel))).toBeVisible();
    }

    it('should step to settings screen', async () => {
      await screenIsThere('settings');
    });

    it('should step to previous screen', async () => {
      await screenIsThere('previous');
    });

    it('should step to search screen', async () => {
      await screenIsThere('search');
    });

    it('step through screens and show details screen on item click', async () => {
      await screenIsThere('previous');
      await screenIsThere('settings');
      await screenIsThere('upcoming');

      // renderer should now be on the upcoming screen
      await expect(element(by.id(`list-item-${nextLaunchId}`))).toBeVisible();
      await element(by.id(`list-item-${nextLaunchId}`)).tap();

      await expect(element(by.id('details-screen'))).toBeVisible();
    });
  });
} else {
  //only a placeholder, to not screw up your tests
  describe('Hack', () => {
    it('passes', async () => {});
  });
}
