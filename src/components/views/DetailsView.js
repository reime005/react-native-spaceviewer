import React, {Component} from 'react';
import { ScrollView, View, Text} from 'react-native';
import { DetailsContent } from '../details/DetailsContent';
import { DetailsInfoContainer } from '../container/DetailsInfoContainer';
import mainStyle from '../../styles/mainStyle';
import { headerBottomSpace } from '../../constants/theme';

export class DetailsView extends Component {
  _closeView = () => {
    this.props.closeView()
  }

  render() {
    const item = this.props.item;

    const {
      name,
      net,
      hashtag,
      status,
      lsp,
      vidURLs
    } = item;

    const locationName = item.location.name;

    const {
      imageURL
    } = item.rocket;

    return (
      <ScrollView style={mainStyle.viewContainer}>
        <View style={{
          height: headerBottomSpace
        }}/>
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

        <DetailsContent
          item={item}
        />

        <View style={{
          height: headerBottomSpace
        }}/>
      </ScrollView>
    );
  }
}