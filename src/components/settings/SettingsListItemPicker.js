import React from 'react';
import { Picker, ScrollView, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import Moment from 'moment';

import { SETTING_FORMAT_DATE } from '../../constants/settings';
import { possibleDateFormats } from '../../constants/defaultSettings';
import settingsStyle from '../../styles/settingsStyle';
import { useTranslation } from 'react-i18next';

export const SettingsListItemPicker = props => {
  const { t } = useTranslation();
  const now = new Date();

  return (
    <Modal
      visible={props.visible}
      presentationStyle="formSheet"
      animationType="fade"
      onRequestClose={() => props.onRequestClose}
      transparent={true}
      onDismiss={() => props.onRequestClose}>
      <View style={{ flex: 1 }}>
        <ScrollView
          style={settingsStyle.pickerScrollViewStyle}
          contentContainerStyle={settingsStyle.pickerContentStyle}
          bounces={false}>
          <Text style={settingsStyle.pickerText}>
            {t('Choose your preferred Date Format:')}
          </Text>
          <Picker
            selectedValue={props.selectedValue}
            style={settingsStyle.pickerStyle}
            onValueChange={(itemValue, itemIndex) =>
              props.onValueChange(SETTING_FORMAT_DATE, itemValue)
            }>
            {Array.from(possibleDateFormats, possibilitie => (
              <Picker.Item
                label={Moment(now).format(possibilitie.value)}
                value={possibilitie.value}
              />
            ))}
          </Picker>
        </ScrollView>
      </View>
    </Modal>
  );
};
