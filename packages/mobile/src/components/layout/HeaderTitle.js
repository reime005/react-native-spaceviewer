import React from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import mainStyle from '../../styles/mainStyle';
import { useTranslation } from 'react-i18next';

export const HeaderTitle = ({ text = '' }) => {
  const { t } = useTranslation();

  return (
    <View style={mainStyle.headerTitleContainer}>
      <Animatable.Text
        animation="fadeIn"
        style={mainStyle.headerTitleContainerText}>
        {t(text)}
      </Animatable.Text>
    </View>
  );
};
