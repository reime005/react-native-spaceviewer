import React, { useState, useCallback } from 'react';
import { View, Platform } from 'react-native';
/* eslint-disable-next-line */
import List from 'react-native-settings-list';
import Moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import settingsStyle, { arrowStyle } from '../../styles/settingsStyle';
import { SettingsListItemIcon } from './SettingsListItemIcon';
import { SETTING_FORMAT_DATE } from '../../constants/settings';
import { settingsListItemIconSize, colors } from '../../constants/theme';
import { Routes } from '../../constants/routes';
import { URL_ANDROID, URL_IOS, URL_SUPPORT } from '../../constants/app';
import { useTranslation } from 'react-i18next';

const Arrow = props => (
  <MaterialCommunityIcons
    {...props}
    style={settingsStyle.iconStyle}
    color={colors.PRIMARY}
    name={'chevron-right'}
    size={settingsListItemIconSize}
  />
);

export const SettingsList = ({ saveValue, settings, navigation, openURL }) => {
  const settingsFormatValue = settings[SETTING_FORMAT_DATE];

  const { t } = useTranslation();

  return (
    <View style={{ flex: 1 }}>
      <List borderColor="transparent">
        <List.Item
          title={t('Privacy Policy')}
          icon={<SettingsListItemIcon name="account-box" />}
          arrowIcon={<Arrow />}
          hasNavArrow={true}
          titleStyle={settingsStyle.titleStyle}
          titleBoxStyle={settingsStyle.titleBoxStyle}
          arrowStyle={arrowStyle}
          onPress={() => navigation.navigate(Routes.PRIVACY_POLICY_SCREEN)}
        />
        <List.Item
          title={t('Credits')}
          icon={<SettingsListItemIcon name="information" />}
          arrowIcon={<Arrow />}
          titleStyle={settingsStyle.titleStyle}
          titleBoxStyle={settingsStyle.titleBoxStyle}
          arrowStyle={arrowStyle}
          onPress={() => navigation.navigate(Routes.CREDITS_SCREEN)}
        />
        <List.Item
          title={t('Feedback')}
          hasNavArrow={true}
          icon={<SettingsListItemIcon name="message-alert" />}
          arrowIcon={<Arrow />}
          titleStyle={settingsStyle.titleStyle}
          titleBoxStyle={settingsStyle.titleBoxStyle}
          arrowStyle={arrowStyle}
          onPress={() => {
            if (Platform.OS === 'ios') {
              openURL(URL_IOS);
            } else {
              openURL(URL_ANDROID);
            }
          }}
        />
        <List.Item
          title={t('Support')}
          hasNavArrow={true}
          icon={<SettingsListItemIcon name="information" />}
          arrowIcon={<Arrow />}
          titleStyle={settingsStyle.titleStyle}
          titleBoxStyle={settingsStyle.titleBoxStyle}
          arrowStyle={arrowStyle}
          onPress={() => {
            openURL(URL_SUPPORT);
          }}
        />
      </List>
    </View>
  );
};
