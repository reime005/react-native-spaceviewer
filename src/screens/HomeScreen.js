import React from 'react';
import { HomeContainer } from '../components/container';
import mainStyle from '../styles/mainStyle';


export class HomeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return null;
  };

  render() {
    return (
      <HomeContainer
        {...this.props}
      />
    );
  }
}

export default HomeScreen;
