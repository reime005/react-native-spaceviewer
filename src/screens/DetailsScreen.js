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
      // headerTitle: null,
      headerTransparent: true,
      headerStyle: {
        backgroundColor: 'transparent',
      },
      // headerTitle: navigation.getParam('name', 'Details'),
      headerTitle: ({ style, children: title }) => {
        return (
          <Text style={style} numberOfLines={2}>
            {navigation.getParam('name', 'Details')}
          </Text>
        );
      },
      headerTitleStyle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
      },
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
    return (
      <View
        style={{ flex: 1, paddingTop: 20 }}
        accessibilityLabel={'details-screen'}
        testID={'details-screen'}>
        {this.state.item ? (
          <DetailsContainer
            item={this.state.item}
            navigation={this.props.navigation}
          />
        ) : null}
      </View>
    );
  }
}
