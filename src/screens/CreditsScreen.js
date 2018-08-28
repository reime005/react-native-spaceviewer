import React from 'react';
import {View, Text} from 'react-native';
import mainStyle from '../styles/mainStyle';
import { headerBottomSpace, headerLeftSize, colors } from '../constants/theme';
import { CreditsView } from '../components/views/CreditsView';
import { HeaderTitle } from '../components/layout/HeaderTitle';
import { SocialUrlIcon } from '../components/pure';

export class CreditsScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <HeaderTitle text='Credits' />,
      headerLeft: 
        <SocialUrlIcon 
          iconName='chevron-left'
          size={headerLeftSize}
          color={colors.HEADER_LEFT_COLOR}
          onPress={() => navigation.goBack()}
        />
    }
  };

  render() {
    return (
      <CreditsView
      />
    );
  }
}

export default CreditsScreen;
