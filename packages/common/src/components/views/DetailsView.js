import React, { Component } from 'react';
import { ScrollView, View, Text, Animated } from 'react-native';
import { DetailsContent } from '../details/DetailsContent';
import { DetailsInfoContainer } from '../container/DetailsInfoContainer';

export class DetailsView extends Component {
  constructor(props) {
    super(props);
  }

  _closeView = () => {
    this.props.closeView();
  };

  render() {
    const { item = {} } = this.props;

    const {
      name,
      net,
      hashtag,
      status,
      lsp,
      vidURLs,
      location = {},
      rocket = {},
    } = item;

    const { name: locationName = '' } = location;

    const { imageURL } = rocket;

    return (
      <View
        style={{
          flex: 1,
          height: '100%',
          backgroundColor: 'transparent',
        }}>
        <ScrollView style={{ height: '100%' }}>
          <DetailsInfoContainer
            uri={imageURL[1]}
            net={net}
            status={status}
            hashtag={hashtag}
            lsp={lsp}
            vidURLs={vidURLs}
            locationName={locationName}
            name={name}
          />

          <DetailsContent item={item} />
        </ScrollView>
      </View>
    );
  }
}
