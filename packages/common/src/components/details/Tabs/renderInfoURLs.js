import React from 'react';
import { Accordion, View, Content } from 'native-base';
import { RandomUrlBadge } from '../../pure/SocialIcons/RandomUrlBadge';

export const renderInfoURLs = (
  infoURLs = [],
  wrap = true,
  start = 0,
  end = 2,
) => {
  if (infoURLs.length < 1) {
    return null;
  }

  return Array.from(infoURLs.slice(start, end), infoURL => (
    <RandomUrlBadge url={infoURL} />
  ));
};
