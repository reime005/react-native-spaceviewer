import React from 'react';

import { mapSize } from '../../../constants/theme';
import { MapContainer } from '../../container/MapContainer';

export class MapContent extends React.Component {
  render() {
    const size = Math.floor(mapSize);

    return <MapContainer size={size} pad={this.props.pad} />;
  }
}
