import React from 'react';
import { View, Text, Platform } from 'react-native';
import overviewListStyle from '../../styles/overviewListStyle';
import { OverviewListIconContainer } from '../container/OverviewListIconContainer';
import { OverviewListItemText } from './OverviewListItemText';
import { CustomTouchableHighlight } from '../pure/CustomTouchableHighlight';
import { SETTING_FORMAT_DATE } from '../../constants/settings';
import { getFormattedTime } from '../../lib/time/getFormattedTime';
import { Routes } from '../../constants/routes';
import { overviewListBigIconSize } from '../../constants/theme';
import { routes } from '../../router/routes';

export class OverviewListItem extends React.PureComponent {
  state = {
    detailsOpen: false,
  };

  _onPress = () => {
    if (Platform.OS === 'web') {
      return;
    }

    if (this.props.history) {
      this.props.history.push(routes.details, {
        item: this.props.item,
        name: this.props.item.name,
      });
    }
  };

  // componentDidMount() {
  //   if (this.props.item.id == 1956) {
  //     this._onPress();
  //   }
  // }

  render() {
    const { item, openFirstMapLocation, settings } = this.props;

    const { name, id, net } = item;

    const lspName = item.lsp ? item.lsp.name : '';

    const locationName = item.location.name;

    const { imageURL } = item.rocket;

    const dateFormat = settings[SETTING_FORMAT_DATE];

    return (
      <CustomTouchableHighlight
        onPress={this._onPress}
        accessibilityLabel={`list-item-${id}`}
        testID={`list-item-${id}`}
        style={overviewListStyle.container}
      >
        <Text style={overviewListStyle.title}>{name}</Text>

        <View style={overviewListStyle.contentContainer}>
          <OverviewListIconContainer uri={imageURL[0]} />

          <View style={overviewListStyle.textContainer}>
            <OverviewListItemText iconName="account-box" text={lspName} />
            <OverviewListItemText iconName="map-marker" text={locationName} />
            <OverviewListItemText
              iconName="clock"
              text={getFormattedTime(dateFormat, net)}
            />
          </View>
        </View>
      </CustomTouchableHighlight>
    );
  }
}
