import React from 'react';
import { PreviousContainer } from '../components/container';
import { View } from 'react-native';

export class PreviousScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return null;
  };

  render() {
    return (
      <View
        style={{ flex: 1 }}
        accessibilityLabel={'previous-screen'}
        testID={'previous-screen'}>
        <PreviousContainer {...this.props} />
      </View>
    );
  }
}

export default PreviousScreen;
