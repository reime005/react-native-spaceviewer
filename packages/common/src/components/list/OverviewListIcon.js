import React from 'react';
import { View, Image } from 'react-native';

import { overviewListIconBorderWidth, colors } from '../../constants/theme';
import { CustomTouchableHighlight } from '../pure/CustomTouchableHighlight';

export class OverviewListIcon extends React.Component {
  state = {
    uri: undefined,
  };

  async componentDidMount() {
    const { uri } = this.props;

    if (typeof uri === 'string') {
      this.setState({
        uri,
      });
    } else {
      this.props.uri
        .then(value => this.setState({ uri: value }))
        .catch(error => console.error(error));
    }
  }

  render() {
    let { uri } = this.state;

    const size = this.props.size || 80;
    const rad = size / 2;

    if (!uri) {
      uri =
        'https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_320.png';
    }

    return (
      <View>
        {
          <CustomTouchableHighlight
            style={{
              height: size,
              width: size,
              padding: 2,
              backgroundColor: 'white',
              borderWidth: overviewListIconBorderWidth,
              borderColor: colors.BORDER_GREY,
              borderRadius: rad,
            }}
          >
            <Image
              style={{
                flex: 1,
                borderRadius: rad,
              }}
              source={{
                uri,
              }}
              resizeMode="cover"
            />
          </CustomTouchableHighlight>
        }
      </View>
    );
  }
}
