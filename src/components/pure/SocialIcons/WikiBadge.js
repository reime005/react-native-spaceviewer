import React from 'react';
import { SocialUrlIcon } from './SocialUrlIcon';
import { colors, wikiBadgeSize } from '../../../constants/theme';
import overviewDetailsStyle from '../../../styles/overviewDetailsStyle';

export const WikiBadge = props => {
  return (
    <SocialUrlIcon
      {...props}
      iconName="wikipedia"
      size={wikiBadgeSize}
      color={colors.WIKI_FONT}
      containerStyle={[
        overviewDetailsStyle.badgeContainerStyle,
        {
          backgroundColor: colors.WIKI_BACKGROUND,
        },
      ]}
    />
  );
};
