import React from 'react';
import { useTranslation } from 'react-i18next';
import { Platform, View } from 'react-native';
import List from 'react-native-settings-list';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { URL_ANDROID, URL_IOS, URL_SUPPORT } from '../../constants/app';
import { Routes } from '../../constants/routes';
import { SETTING_FORMAT_DATE } from '../../constants/settings';
import { colors, settingsListItemIconSize } from '../../constants/theme';
import settingsStyle, { arrowStyle } from '../../styles/settingsStyle';
import { SettingsListItemIcon } from './SettingsListItemIcon';
import { useHistory } from 'react-router-dom';
import { routes } from '../../router/routes';

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
  const { push, location } = useHistory();

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
          onPress={() => push(routes.privacy)}
        />
        <List.Item
          title={t('Credits')}
          icon={<SettingsListItemIcon name="information" />}
          arrowIcon={<Arrow />}
          titleStyle={settingsStyle.titleStyle}
          titleBoxStyle={settingsStyle.titleBoxStyle}
          arrowStyle={arrowStyle}
          onPress={() => push(routes.credits)}
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
