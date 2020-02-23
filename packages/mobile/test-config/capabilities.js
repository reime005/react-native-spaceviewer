const capabilities = {
  local_android_debug: {
    platformName: 'Android',
    automationName: 'UiAUtomator2',
    printPageSourceOnFindFailure: false,
    deviceName: 'Android Emulator',
    app: 'android/app/build/outputs/apk/debug/app-debug.apk',
  },
  local_android_release: {
    platformName: 'Android',
    automationName: 'UiAUtomator2',
    printPageSourceOnFindFailure: false,
    deviceName: 'Android Emulator',
    app: 'android/app/build/outputs/apk/release/app-release.apk',
  },
  local_ios_debug: {
    platformName: 'iOS',
    deviceName: 'iPhone X',
    printPageSourceOnFindFailure: false,
    automationName: 'XCUITest',
    app: 'ios/app-debug.zip',
  },
  local_ios_release: {
    platformName: 'iOS',
    deviceName: 'iPhone X',
    printPageSourceOnFindFailure: false,
    automationName: 'XCUITest',
    app: 'ios/app-release.zip',
  },
};

if (!process.env.E2E_DEVICE) {
  throw new Error('E2E_DEVICE environment variable is not defined');
}

if (!capabilities[process.env.E2E_DEVICE]) {
  throw new Error(
    `Capabilities not found for E2E_DEVICE environment ${
      process.env.E2E_DEVICE
    }`
  );
}

export default capabilities[process.env.E2E_DEVICE];
