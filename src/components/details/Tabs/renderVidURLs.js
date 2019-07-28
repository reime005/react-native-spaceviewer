import React from 'react';
import { View } from 'react-native';
import { StreamBadge } from '../../pure/SocialIcons/StreamBadge';

export const renderVidURLs = (vidURLs = [], openURLMethod) => {
  if (vidURLs.length < 1) {
    return null;
  }

  return Array.from(vidURLs, vidURL => <StreamBadge url={vidURL} />);
};
