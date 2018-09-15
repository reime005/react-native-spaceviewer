import React from 'react';
import { SettingsContainer } from '../components/container';
import { View } from 'react-native';

export const SettingsScreen = (props) => {
  return (
    <View accessibilityLabel={'settings-screen'}>
      <SettingsContainer 
        {...props}
      />
    </View>
  );
} 
