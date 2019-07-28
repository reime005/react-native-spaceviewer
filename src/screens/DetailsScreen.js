import React from 'react';
import { Text, StatusBar, View } from 'react-native';
import { DetailsContainer } from '../components/container';
import { SocialUrlIcon } from '../components/pure/SocialIcons';
import { colors, headerLeftSize } from '../constants/theme';
import mainStyle from '../styles/mainStyle';

export class DetailsScreen extends React.Component {
  state = {
    item: undefined,
  };

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.getParam('name', 'Details'),
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

  componentDidMount() {
    const item = this.props.navigation.getParam('item', {});

    this.setState({
      item,
    });
  }

  render() {
    if (typeof this.state.item === 'undefined') {
      return null;
    }

    return (
      <View
        style={{ flex: 1 }}
        accessibilityLabel={'details-screen'}
        testID={'details-screen'}>
        <StatusBar backgroundColor={'red'} />
        <DetailsContainer
          item={this.state.item}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}
