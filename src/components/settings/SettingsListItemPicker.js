import React from 'react';
import {
  Modal,
  Picker,
  ScrollView,
  Text
} from 'react-native';
import Moment from 'moment';

import { SETTING_FORMAT_DATE } from '../../constants/settings';
import { possibleDateFormats } from '../../constants/defaultSettings';
import settingsStyle from '../../styles/settingsStyle';

export const SettingsListItemPicker = (props) => {
  const now = new Date();

  return(
    <Modal 
      visible={props.visible}
      presentationStyle='formSheet'
      animationType='fade'
      onRequestClose={() => props.onRequestClose}
      transparent={true}
      onDismiss={() => props.onRequestClose}
    >
      <ScrollView
        style={settingsStyle.pickerScrollViewStyle}
        contentContainerStyle={settingsStyle.pickerContentStyle}
        bounces={false}>
        <Text style={settingsStyle.pickerText}>Choose your preferred Date Format: </Text>
        <Picker
          selectedValue={props.selectedValue}
          style={settingsStyle.pickerStyle}
          onValueChange={(itemValue, itemIndex) => props.onValueChange(SETTING_FORMAT_DATE, itemValue)}>
          {
            Array.from(possibleDateFormats, possibilitie => (
              <Picker.Item 
                label={Moment(now).format(possibilitie.value)} 
                value={possibilitie.value} 
              />
            ))
          }
        </Picker>
      </ScrollView>
    </Modal>
  )
}