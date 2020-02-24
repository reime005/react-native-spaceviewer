import React from 'react';
import { View } from 'react-native';
import { SearchContainer, SearchFieldContainer } from '../components/container';
import mainStyle from '../styles/mainStyle';
import { headerHeight } from '../constants/theme';

export class SearchScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: '',
      headerStyle: [mainStyle.headerStyle, { height: headerHeight * 1.75 }],
      headerTitle: <SearchFieldContainer />,
      // headerTitleStyle: mainStyle.headerTextTitleStyle,
    };
  };

  render() {
    return (
      <View
        style={{ flex: 1 }}
        accessibilityLabel={'search-screen'}
        testID={'search-screen'}>
        <SearchContainer {...this.props} />
      </View>
    );
  }
}
