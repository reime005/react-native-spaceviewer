import React from 'react';
import { SocialUrlIcon } from './SocialUrlIcon';
import { colors, wikiBadgeSize } from '../../../constants/theme';
import overviewDetailsStyle from '../../../styles/overviewDetailsStyle';

export const StreamBadge = props => {
  return (
    <SocialUrlIcon
      {...props}
      iconName="video"
      size={wikiBadgeSize}
      color={colors.YOUTUBE_FONT}
      containerStyle={[
        overviewDetailsStyle.badgeContainerStyle,
        {
          backgroundColor: colors.YOUTUBE_BACKGROUND,
        },
      ]}
    />
  );
};
