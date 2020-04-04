import { connect } from 'react-redux';
import { SettingsView } from '../views/SettingsView';
import { settingsSaveValueSagaAction, openURLSagaAction } from '../../actions';

export const SettingsContainer = connect(
  state => ({
    settings: state.settings,
  }),
  dispatch => ({
    openURL: url => {
      dispatch(openURLSagaAction(url));
    },
    saveValue: (key, value) => {
      dispatch(settingsSaveValueSagaAction(key, value));
    },
  }),
)(SettingsView);
