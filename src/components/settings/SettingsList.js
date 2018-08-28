import React from 'react';
import {
  View,
  Platform,
} from 'react-native';
import List from 'react-native-settings-list';
import Moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import settingsStyle, { arrowStyle } from '../../styles/settingsStyle';
import { SettingsListItemIcon } from './SettingsListItemIcon';
import { SettingsListItemPicker } from './SettingsListItemPicker';
import { SETTING_FORMAT_DATE } from '../../constants/settings';
import { settingsListItemIconSize, colors } from '../../constants/theme';
import { PRIVACY_POLICY_SCREEN, CREDITS_SCREEN } from '../../constants/routes';
import { URL_ANDROID, URL_IOS, URL_SUPPORT } from '../../constants/app';

export class SettingsList extends React.Component {
  state = {
    pickerVisible: false,
  }

  _openPicker() {
    this.setState({
      pickerVisible: true
    })
  }

  _onValueChange = (key, value) => {
    this.setState({
      pickerVisible: false,
    });

    this.props.saveValue &&
      this.props.saveValue(key, value);
  }

  render() {
    const {
      pickerVisible
    } = this.state;

    const {
      settings
    } = this.props;

    const settingsFormatValue = settings[SETTING_FORMAT_DATE];

    const Arrow = () => (
      <MaterialCommunityIcons 
        {...this.props}
        style={settingsStyle.iconStyle}
        color={colors.PRIMARY} 
        name={'chevron-right'}
        size={settingsListItemIconSize} 
      />
    )

    return(
      <View style={{flex: 1}}>

        <SettingsListItemPicker 
          visible={pickerVisible} 
          selectedValue={settingsFormatValue}
          onValueChange={this._onValueChange}
          onRequestClose={() => this.setState({pickerVisible: false})}
        />
        <List borderColor='transparent' >
          
          <List.Header 
            headerText='Settings' 
            headerStyle={settingsStyle.headerStyle}
            arrowIcon={
              <Arrow />
            }
          />
          <List.Item 
            title='Date Format'
            titleInfo={`Current: ${Moment(new Date()).format(settingsFormatValue)}`}
            titleInfoPosition='Bottom'
            hasNavArrow={false}
            icon={
              <SettingsListItemIcon name='clock' />
            }
            arrowIcon={
              <Arrow />
            }
            titleStyle={settingsStyle.titleStyle}
            titleBoxStyle={settingsStyle.titleBoxStyle}
            onPress={() => this._openPicker()}
          />

          <List.Header 
            headerText='About' 
            headerStyle={settingsStyle.headerStyle}
            arrowIcon={
              <Arrow />
            }
          />

          <List.Item 
            title='Privacy Policy'
            icon={
              <SettingsListItemIcon name='account-box' />
            }
            arrowIcon={
              <Arrow />
            }
            hasNavArrow={true}
            titleStyle={settingsStyle.titleStyle}
            titleBoxStyle={settingsStyle.titleBoxStyle}
            arrowStyle={arrowStyle}
            onPress={() => this.props.navigation.navigate(PRIVACY_POLICY_SCREEN)}
          />
          <List.Item 
            title='Credits'
            icon={
              <SettingsListItemIcon name='information' />
            }
            arrowIcon={
              <Arrow />
            }
            titleStyle={settingsStyle.titleStyle}
            titleBoxStyle={settingsStyle.titleBoxStyle}
            arrowStyle={arrowStyle}
            onPress={() => this.props.navigation.navigate(CREDITS_SCREEN)}
          />
          <List.Item 
            title='Feedback'
            hasNavArrow={true}
            icon={
              <SettingsListItemIcon name='message-alert' />
            }
            arrowIcon={
              <Arrow />
            }
            titleStyle={settingsStyle.titleStyle}
            titleBoxStyle={settingsStyle.titleBoxStyle}
            arrowStyle={arrowStyle}
            onPress={() => {
              if (Platform.OS === 'ios') {
                this.props.openURL(URL_IOS)
              } else {
                this.props.openURL(URL_ANDROID)
              }
            }}
          />
          <List.Item 
            title='Support'
            hasNavArrow={true}
            icon={
              <SettingsListItemIcon name='gift' />
            }
            arrowIcon={
              <Arrow />
            }
            titleStyle={settingsStyle.titleStyle}
            titleBoxStyle={settingsStyle.titleBoxStyle}
            arrowStyle={arrowStyle}
            onPress={() => {
              this.props.openURL(URL_SUPPORT)
            }}
          />
        </List>
      </View>
    )
  }
}