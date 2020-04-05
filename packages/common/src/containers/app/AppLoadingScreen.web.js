import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component, useEffect, useState, useRef } from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';

import { loadNextLaunchesSagaAction } from '../../actions';
import { colors } from '../../constants/theme';
import mainStyle from '../../styles/mainStyle';
import { Routes } from '../../constants/routes';
import { FILE_PREV_LAUNCHES, FILE_NEXT_LAUNCHES } from '../../constants/files';

import { useHistory } from 'react-router-dom';
import { routes } from '../../router/routes';

const _AppLoadingScreen = props => {
  const timerRef = useRef(false);
  const { replace } = useHistory();

  React.useEffect(() => {
    timerRef.current = setTimeout(() => {
      replace(routes.home);
    }, 2000);

    return () => clearTimeout(timerRef.current);
  }, [props, replace]);

  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: colors.PRIMARY,
        justifyContent: 'space-around',
      }}
    >
      <Image
        style={{ height: '7vw' }}
        source={require('../../../../assets/images/title.png')}
        resizeMode="contain"
      />
      <Image
        style={{ height: '70vw' }}
        source={require('../../../../assets/images/splash.png')}
        resizeMode="contain"
      />
    </View>
  );
};

export const AppLoadingScreen = connect(
  state => ({}),
  dispatch => ({
    initLoading: () => {
      dispatch(loadNextLaunchesSagaAction(FILE_NEXT_LAUNCHES));
      dispatch(loadNextLaunchesSagaAction(FILE_PREV_LAUNCHES));
    },
  }),
)(_AppLoadingScreen);
