import React from 'react'

import { View } from "react-native";
import { HomeContainer } from '../components';

export const HomeScreen = (props: any) => {
  return (
    <View
      style={{ flex: 1 }}
      accessibilityLabel={'upcoming-screen'}
      testID={'upcoming-screen'}>
      <HomeContainer {...props} />
    </View>
  );
}
