const capabilities = {
  local_android: {
    platformName: 'Android',
    deviceName: 'Android Emulator',
    app: '/Users/marius/d/mr/react-native-spaceviewer/android/app/build/outputs/apk/app-x86-debug.apk'
  },
  local_ios: {
    platformName: 'iOS',
    deviceName: 'iPhone X',
    platformVersion: '11.4',
    app: '/Users/marius/d/mr/react-native-spaceviewer/ios/build/Build/Products/Release-iphonesimulator/app.zip'
  },
};

if (!process.env.E2E_DEVICE) {
    throw new Error('E2E_DEVICE environment variable is not defined');
}

if (!capabilities[process.env.E2E_DEVICE]) {
    throw new Error(`Capabilities not found for E2E_DEVICE environment ${process.env.E2E_DEVICE}`);
}

export default capabilities[process.env.E2E_DEVICE];