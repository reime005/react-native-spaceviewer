import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component, useEffect, useState } from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';

import { loadNextLaunchesSagaAction } from '../../actions';
import { colors } from '../../constants/theme';
import mainStyle from '../../styles/mainStyle';
import { Routes } from '../../constants/routes';
import { FILE_PREV_LAUNCHES, FILE_NEXT_LAUNCHES } from '../../constants/files';

const _AppLoadingScreen = props => {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    props.initLoading();
  }, [props]);

  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        backgroundColor: colors.PRIMARY,
        justifyContent: isFinished ? 'center' : 'flex-end',
      }}>
      {!isFinished && (
        <Animatable.Image
          animation="bounceOutUp"
          duration={1000}
          delay={500}
          style={mainStyle.splashImage}
          onAnimationEnd={() => {
            setIsFinished(true);
          }}
          source={require('../../../assets/images/splash.png')}
          resizeMode={FastImage.resizeMode.contain}
        />
      )}
      {isFinished && (
        <Animatable.Image
          animation="bounceInDown"
          duration={1200}
          delay={0}
          style={mainStyle.splashTitle}
          onAnimationEnd={() => {
            props.navigation.navigate(Routes.HOME_SCREEN);
          }}
          source={require('../../../assets/images/title.png')}
          resizeMode={FastImage.resizeMode.contain}
        />
      )}
    </View>
  );
};

export const AppLoadingScreen = connect(
  null,
  dispatch => ({
    initLoading: () => {
      dispatch(loadNextLaunchesSagaAction(FILE_NEXT_LAUNCHES));
      dispatch(loadNextLaunchesSagaAction(FILE_PREV_LAUNCHES));
    },
  })
)(_AppLoadingScreen);
