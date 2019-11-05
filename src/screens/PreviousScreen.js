import React from 'react';
import { PreviousContainer } from '../components/container';
import { View } from 'react-native';
import { HeaderTitle } from '../components/layout/HeaderTitle';

export class PreviousScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: () => <HeaderTitle text="Previous Rocket Launches" />,
    };
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
