import React from 'react';
import { View } from 'react-native';
import Gmaps, { Marker } from 'react-native-maps';

import { CustomTouchableHighlight } from '../pure/CustomTouchableHighlight';
import overviewDetailsStyle from '../../styles/overviewDetailsStyle';

export const MapView = props => (
  <Gmaps
    style={overviewDetailsStyle.mapView}
    initialRegion={{
      ...props.pad,
      latitudeDelta: 5,
      longitudeDelta: 5,
    }}
    latitude={props.pad.latitude}
    longitude={props.pad.longitude}
    size={{ width: props.size, height: props.size }}>
    <Marker
      coordinate={{
        ...props.pad,
      }}
      onPress={() => props.openFirstMapLocation([props.pad])}
      title={props.pad.agencies.length ? props.pad.agencies[0].name : ''}
      description={props.pad.name}
    />
  </Gmaps>
);

export default MapView;
