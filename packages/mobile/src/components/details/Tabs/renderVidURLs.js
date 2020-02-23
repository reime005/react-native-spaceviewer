import React from 'react';
import { View } from 'react-native';
import { StreamBadge } from '../../pure/SocialIcons/StreamBadge';

export const renderVidURLs = (vidURLs = [], start = 0, end = 2) => {
  if (vidURLs.length < 1) {
    return null;
  }

  return Array.from(vidURLs.slice(start, end), vidURL => (
    <StreamBadge url={vidURL} />
  ));
};
