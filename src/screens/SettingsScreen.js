import React from 'react';
import { SettingsContainer } from '../components/container';
import { View } from 'react-native';

export const SettingsScreen = props => {
  return (
    <View
      style={{ flex: 1 }}
      accessibilityLabel={'settings-screen'}
      testID={'settings-screen'}>
      <SettingsContainer {...props} />
    </View>
  );
};
