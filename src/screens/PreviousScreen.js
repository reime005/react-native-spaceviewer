import React from 'react';
import { PreviousContainer } from '../components/container';
import { View } from 'react-native';

export class PreviousScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return null;
  };

  render() {
    return (
      <View accessibilityLabel={'previous-screen'}>
        <PreviousContainer
          {...this.props}
        />
      </View>
    );
  } 
}

export default PreviousScreen;
