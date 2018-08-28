import React from 'react';
import { View } from 'react-native';
import GoogleStaticMap from 'react-native-google-static-map';

import { CustomTouchableHighlight } from '../pure/CustomTouchableHighlight';
import overviewDetailsStyle from '../../styles/overviewDetailsStyle';

export const MapView = (props) => (
  <CustomTouchableHighlight
    onPress={() => props.openFirstMapLocation([props.pad])}   
  >
    <View style={{ position: 'relative' }}>
      <GoogleStaticMap
        style={overviewDetailsStyle.mapView}
        latitude={props.pad.latitude}
        longitude={props.pad.longitude}
        zoom={5}
        scale={2}
        size={{ width: props.size, height: props.size }}
      />
    </View>
  </CustomTouchableHighlight>
)

export default MapView;