import React from 'react';
import { SettingsContainer } from '../components/container';
import { View } from 'react-native';
import { HeaderTitle } from '../components/layout/HeaderTitle';

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

SettingsScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: () => <HeaderTitle text="Settings" />,
  };
};
