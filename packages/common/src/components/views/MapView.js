import React from 'react';
import Gmaps, { Marker } from 'react-native-maps';

import overviewDetailsStyle from '../../styles/overviewDetailsStyle';
import idx from 'idx';

export const MapView = props => {
  const length = idx(props, _ => _.pad.agencies.length);

  return (
    <Gmaps
      style={overviewDetailsStyle.mapView}
      initialRegion={{
        ...props.pad,
        latitudeDelta: 5,
        longitudeDelta: 5,
      }}
      latitude={props.pad ? props.pad.latitude : 0}
      longitude={props.pad ? props.pad.longitude : 0}
      size={{ width: props.size, height: props.size }}
    >
      <Marker
        coordinate={{
          ...props.pad,
        }}
        onPress={() => props.openFirstMapLocation([props.pad])}
        title={length ? props.pad.agencies[0].name : ''}
        description={props.pad ? props.pad.name : ''}
      />
    </Gmaps>
  );
};

export default MapView;
