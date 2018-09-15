import React from 'react';
import { View } from 'react-native';
import { HomeContainer } from '../components/container';
import mainStyle from '../styles/mainStyle';


export class HomeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return null;
  };

  render() {
    return (
      <View accessibilityLabel={'upcoming-screen'}>
        <HomeContainer
          {...this.props}
        />
      </View>
    );
  }
}

export default HomeScreen;
