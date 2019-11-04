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

    async function screenIsThere(screen = 'Upcoming') {
      const lower = screen.toLowerCase();

      const viewLabel = `${lower}-screen`;
      let tabBtn = `tab-btn-${screen}`;

      await expect(element(by.id(tabBtn)).atIndex(0)).toBeVisible();
      await element(by.id(tabBtn))
        .atIndex(0)
        .tap();

      //HACK: hide auto-focused keyboard
      if (screen === 'Search') {
        await element(by.id('searchInput')).typeText('\n');
      }

      await expect(element(by.id(viewLabel)).atIndex(0)).toBeVisible();
    }

    it('should step to settings screen', async () => {
      await screenIsThere('Settings');
    });

    it('should step to previous screen', async () => {
      await screenIsThere('Previous');
    });

    it('should step to search screen', async () => {
      await screenIsThere('Search');
    });

    it('step through screens and show details screen on item click', async () => {
      await screenIsThere('Previous');
      await screenIsThere('Settings');
      await screenIsThere('Upcoming');

      // renderer should now be on the upcoming screen
      await expect(
        element(by.id(`list-item-${nextLaunchId}`)).atIndex(0)
      ).toBeVisible();
      await element(by.id(`list-item-${nextLaunchId}`))
        .atIndex(0)
        .tap();

      await expect(element(by.id('details-screen'))).toBeVisible();
    });
  });
} else {
  //only a placeholder, to not screw up your tests
  describe('Hack', () => {
    it('passes', async () => {});
  });
}
