import React, { Component } from 'react';
import { ScrollView, View, Text, Animated } from 'react-native';
import { DetailsContent } from '../details/DetailsContent';
import { DetailsInfoContainer } from '../container/DetailsInfoContainer';
import { useHistory } from 'react-router-dom';

export const DetailsView = props => {
  // _closeView = () => {
  //   this.props.closeView();
  // };

  const history = useHistory();

  if (!history || !history.location || !history.location.state) {
    return null;
  }

  const { item = {} } = history.location.state;

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
      {...props}
      style={{
        flex: 1,
        height: '100%',
        backgroundColor: 'white',
      }}
    >
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
};
