import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
/* eslint-disable-next-line */
import codePush from 'react-native-code-push';
import {
  createReactNavigationReduxMiddleware,
  createReduxContainer,
} from 'react-navigation-redux-helpers';

// Here to import root component, reducer, saga
import '../../lib/lang/i18n';
import reducers from '../../reducers';
import rootSaga from '../../sagas';
import { colors } from '../../constants/theme';
import { codePushOptions } from '../../constants/codePushOptions';
import { RootNavigator } from '../navigators';

// configure store
const sagaMiddleware = createSagaMiddleware();

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const navigationMiddleware = createReactNavigationReduxMiddleware(
  state => state.nav,
);

const middleware = [
  navigationMiddleware,
  sagaMiddleware,
  // logger,
];

// Other configs
console.disableYellowBox = false;

// let Navigation = createReduxContainer(RootNavigator);

const App = createReduxContainer(RootNavigator);
const mapStateToProps = state => ({
  state: state.nav,
});
const Navigation = connect(mapStateToProps)(App);

const store = createStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

// App: root component
let _App = () => (
  <Provider store={store}>
    <StatusBar backgroundColor={colors.PRIMARY_ALPHA} />
    <Navigation />
  </Provider>
);

// export const AppWithNavigationState = connect(mapStateToProps)(_App);

export const AppWithNavigationState = codePush(codePushOptions)(_App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
  },
  // statusBarUnderlay: {
  //     height: 24,paddingTop: 20, marginTop: -20,
  //     backgroundColor: colors.PRIMARY_ALPHA,
  // },
});
