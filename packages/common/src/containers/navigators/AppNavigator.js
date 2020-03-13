import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { BackHandler, Platform, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { RootNavigator } from '../navigators';
import { CLEAR_ALL_BLOCKED_EFFECTS } from '../../actions';

class _AppNavigator extends React.Component {
  static propTypes = {
    nav: PropTypes.object.isRequired,
  };

  componentDidMount() {
    if (Platform.OS !== 'android') {
      return;
    }

    BackHandler.addEventListener('hardwareBackPress', () => {
      const { dispatch, nav } = this.props;

      // This assumes that we always want to clsoe the app when you are at the first screen
      // of the top most navigator or at the first screen of the first level of nested navigators
      if (nav.index === 0) {
        if (!nav.routes[0].index) {
          return false;
        } else if (nav.routes[0].index === 0) {
          return false;
        }
      }

      dispatch(NavigationActions.back());

      return true;
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (!_.isEqual(prevProps.nav, this.props.nav)) {
      this.props.dispatch({ type: CLEAR_ALL_BLOCKED_EFFECTS });
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress');
    }
  }

  render() {
    const { dispatch, nav, hasSession } = this.props;

    return <RootNavigator />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  nav: state.nav,
});

// export const AppNavigator = connect(mapStateToProps)(_AppNavigator);

// export default AppNavigator;
export const AppNavigator = () => <RootNavigator />;
