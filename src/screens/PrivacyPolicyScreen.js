import React from 'react';
import { WebView } from 'react-native';
import { headerBottomSpace, headerLeftSize, colors } from '../constants/theme';
import { HeaderTitle } from '../components/layout/HeaderTitle';
import { SocialUrlIcon } from '../components/pure';

export class PrivacyPolicyScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <HeaderTitle text="Privacy Policy" />,
      headerLeft: (
        <SocialUrlIcon
          iconName="chevron-left"
          size={headerLeftSize}
          color={colors.HEADER_LEFT_COLOR}
          onPress={() => navigation.goBack()}
        />
      ),
    };
  };

  render() {
    return (
      <WebView
        source={{ uri: 'https://mariusreimer.com/privacy-policy' }}
        style={{ marginTop: headerBottomSpace }}
      />
    );
  }
}

export default PrivacyPolicyScreen;
