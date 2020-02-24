import React from 'react';
import { SocialUrlIcon } from './SocialUrlIcon';
import { colors, wikiBadgeSize } from '../../../constants/theme';
import overviewDetailsStyle from '../../../styles/overviewDetailsStyle';
import { getIconNameFromUrl } from '../../../lib/icon/getIconNameFromUrl';

export const RandomUrlBadge = props => {
  const iconName = getIconNameFromUrl(props.url);

  return (
    <SocialUrlIcon
      {...props}
      iconName={iconName}
      size={wikiBadgeSize}
      color={colors.RANDOM_FONT}
      containerStyle={[
        overviewDetailsStyle.badgeContainerStyle,
        {
          backgroundColor: colors.RANDOM_BACKGROUND,
        },
      ]}
    />
  );
};
