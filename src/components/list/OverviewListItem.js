import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import overviewListStyle from '../../styles/overviewListStyle';
import { OverviewListIconContainer } from '../container/OverviewListIconContainer';
import { OverviewListItemText } from './OverviewListItemText';
import { CustomTouchableHighlight } from '../pure/CustomTouchableHighlight';
import { SETTING_FORMAT_DATE } from '../../constants/settings';
import { getFormattedTime } from '../../lib/time/getFormattedTime';
import { DETAILS_SCREEN } from '../../constants/routes';
import { overviewListBigIconSize } from '../../constants/theme';

export class OverviewListItem extends React.PureComponent {
  state = {
    detailsOpen: false
  }

  _onPress = () => {
    this.props.navigation.navigate(DETAILS_SCREEN, {
      item: this.props.item,
      name: this.props.item.name
    })
  };

  // componentDidMount() {
  //   if (this.props.item.id == 1392) {
  //     this._onPress();
  //   }
  // }

  render() {
    const {
      item,
      openFirstMapLocation,
      settings
    } = this.props;

    const {
      name,
      id,
      net,
    } = item;

    const lspName = item.lsp ? item.lsp.name : "";

    const locationName = item.location.name;

    const {
      imageURL
    } = item.rocket;

    const dateFormat = settings[SETTING_FORMAT_DATE];
    
    return (
      <CustomTouchableHighlight 
        onPress={this._onPress} 
        style={overviewListStyle.container}
      >
        <Text 
          style={overviewListStyle.title}>
            {name}
        </Text>

        <View 
          accessibilityLabel={`list-item-${id}`}
          style={overviewListStyle.contentContainer}
        >
          <OverviewListIconContainer 
            size={overviewListBigIconSize}
            uri={imageURL[0]} 
          />
          
          <View 
            style={overviewListStyle.textContainer}
          > 
            <OverviewListItemText 
              iconName='account-box'
              text={lspName} 
            />
            <OverviewListItemText 
              iconName='map-marker'
              // onPress={() => openFirstMapLocation(item.location.pads)}
              text={locationName} 
            />
            <OverviewListItemText 
              iconName='clock'
              text={getFormattedTime(dateFormat, net)} 
            />
          </View>
        </View>
      </CustomTouchableHighlight>
    );
  }
}