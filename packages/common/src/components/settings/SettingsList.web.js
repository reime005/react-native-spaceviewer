import React from 'react';
import { useHistory } from 'react-router-dom';
import { Text, View } from 'react-native';

export const SettingsList = ({ saveValue, settings, navigation, openURL }) => {
  const { push, location } = useHistory();

  return (
    <View style={{ flex: 1 }}>
      <Text>Not yet implemented</Text>
    </View>
  );
};
