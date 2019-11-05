import React from 'react';
import { View, Text } from 'react-native';
import { HomeContainer } from '../components/container';
import mainStyle from '../styles/mainStyle';
import { HeaderTitle } from '../components/layout/HeaderTitle';

export class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: () => <HeaderTitle text="Upcoming Rocket Launches" />,
    };
  };

  render() {
    return (
      <View
        style={{ flex: 1 }}
        accessibilityLabel={'upcoming-screen'}
        testID={'upcoming-screen'}>
        <HomeContainer {...this.props} />
      </View>
    );
  }
}

export default HomeScreen;
