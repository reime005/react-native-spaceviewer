import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
/* eslint-disable-next-line */
import codePush from 'react-native-code-push';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

// Here to import root component, reducer, saga
import AppNavigator from '../navigators/AppNavigator';
import reducers from '../../reducers';
import rootSaga from '../../sagas';
import { colors } from '../../constants/theme';
import { codePushOptions } from '../../constants/codePushOptions';

// confiure store
const sagaMiddleware = createSagaMiddleware();

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const middleware = [
  navigationMiddleware,
  sagaMiddleware,
  // logger,
];

const store = createStore(reducers, {}, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

// Other configs
console.disableYellowBox = false;

const _AppNavigator = reduxifyNavigator(AppNavigator, 'root');

// App: root component
let _App = () => (
  <Provider store={store}>
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar hidden={true} barStyle="default" />}
      {Platform.OS === 'android' && <StatusBar hidden={true} />}
      <AppNavigator />
    </View>
  </Provider>
);

export const App = codePush(codePushOptions)(_App);

const mapStateToProps = state => ({
  nav: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(App);

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

export default AppWithNavigationState;
