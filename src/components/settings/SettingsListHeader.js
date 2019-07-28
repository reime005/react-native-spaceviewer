import React from 'react';
import { SettingsCategoryHeader } from 'react-native-settings-components';
import settingsStyle from '../../styles/settingsStyle';

export const SettingsListHeader = props => {
  return (
    <SettingsCategoryHeader {...props} textStyle={settingsStyle.headerStyle} />
  );
};
