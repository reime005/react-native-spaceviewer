import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors, settingsListItemIconSize } from '../../constants/theme';
import settingsStyle from '../../styles/settingsStyle';

export const SettingsListItemIcon = props => {
  return (
    <MaterialCommunityIcons
      {...props}
      style={settingsStyle.iconStyle}
      color={colors.PRIMARY}
      size={settingsListItemIconSize}
    />
  );
};
