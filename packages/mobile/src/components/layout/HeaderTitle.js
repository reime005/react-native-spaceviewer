import React from 'react';
import { View, Animated } from 'react-native';

import mainStyle from '../../styles/mainStyle';
import { useTranslation } from 'react-i18next';

export const HeaderTitle = ({ text = '' }) => {
  const { t } = useTranslation();

  return (
    <View style={mainStyle.headerTitleContainer}>
      <Animated.Text
        animation="fadeIn"
        style={mainStyle.headerTitleContainerText}>
        {t(text)}
      </Animated.Text>
    </View>
  );
};
