const capabilities = {
  local_android_debug: {
    platformName: 'Android',
    automationName: 'UiAUtomator2',
    deviceName: 'Android Emulator',
    app: 'android/app/build/outputs/apk/debug/app-debug.apk'
  },
  local_android_release: {
    platformName: 'Android',
    automationName: 'UiAUtomator2',
    deviceName: 'Android Emulator',
    app: 'android/app/build/outputs/apk/release/app-release.apk'
  },
  local_ios: {
    platformName: 'iOS',
    deviceName: 'iPhone X',
    platformVersion: '11.4',
    app: 'ios/build/Build/Products/Release-iphonesimulator/app.zip'
  },
};

if (!process.env.E2E_DEVICE) {
    throw new Error('E2E_DEVICE environment variable is not defined');
}

if (!capabilities[process.env.E2E_DEVICE]) {
    throw new Error(`Capabilities not found for E2E_DEVICE environment ${process.env.E2E_DEVICE}`);
}

export default capabilities[process.env.E2E_DEVICE];