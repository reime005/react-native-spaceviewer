import React from 'react';
import { SearchContainer, SearchFieldContainer } from '../components/container';
import mainStyle from '../styles/mainStyle';
import { headerHeight } from '../constants/theme';

export class SearchScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: '',
      headerStyle: [mainStyle.headerStyle, {height: headerHeight * 1.5}],
      headerTitle: <SearchFieldContainer />,
      // headerTitleStyle: mainStyle.headerTextTitleStyle,
    }
  };

  render() {
    return (
      <SearchContainer
        {...this.props}
      />
    );
  }
} 
