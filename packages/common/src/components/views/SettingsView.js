import React from 'react';
import { View } from 'react-native';
import settingsStyle from '../../styles/settingsStyle';
import { SettingsList } from '../settings/SettingsList';

export class SettingsView extends React.Component {
  constructor(props) {
    super(props);
    this.onValueChange = this.onValueChange.bind(this);
    this.state = { switchValue: false };
  }

  render() {
    return (
      <View {...this.props} style={settingsStyle.container}>
        <SettingsList {...this.props} />
      </View>
    );
  }

  onValueChange(value) {
    this.setState({ switchValue: value });
  }
}
