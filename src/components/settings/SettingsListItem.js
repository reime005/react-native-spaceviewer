import React from 'react';
import { Text } from 'react-native';
import { CustomTouchableHighlight } from '../pure/CustomTouchableHighlight';

export class SettingsListItem extends React.Component {
  render() {
    return (
      <CustomTouchableHighlight>
        <Text>{this.props.title}</Text>
      </CustomTouchableHighlight>
    );
  }
}
