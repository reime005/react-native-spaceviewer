import React from 'react';
import { View, Animated } from 'react-native';

import mainStyle from '../../styles/mainStyle';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

export const HeaderTitle = ({ text = '', ...props }) => {
  const { t } = useTranslation();

  return (
    <View style={mainStyle.headerTitleContainer}>
      <Animated.Text
        animation="fadeIn"
        style={mainStyle.headerTitleContainerText}
      >
        {t(text)}
      </Animated.Text>
    </View>
  );
};

export const ConnectedHeaderTitle = connect(
  state => ({}),
  dispatch => ({}),
)(HeaderTitle);
