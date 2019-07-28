import idx from 'idx';

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
      await device.reloadReactNative();
    });

    async function screenIsThere(screen = 'Upcoming') {
      const lower = screen.toLowerCase();

      const viewLabel = `${lower}-screen`;
      let tabBtn = `tab-btn-${screen}`;

      await expect(element(by.id(tabBtn)).atIndex(0)).toBeVisible();
      await element(by.id(tabBtn))
        .atIndex(0)
        .tap();

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
      await expect(
        element(by.id(`list-item-${nextLaunchId}`)).atIndex(0)
      ).toBeVisible();
      await element(by.id(`list-item-${nextLaunchId}`))
        .atIndex(0)
        .tap();
    });
  });
} else {
  //only a placeholder, to not screw up your tests
  describe('Hack', () => {
    it('passes', async () => {});
  });
}
