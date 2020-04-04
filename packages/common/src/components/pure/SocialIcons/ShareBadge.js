import React from 'react';
import { connect } from 'react-redux';
import overviewDetailsStyle from '../../../styles/overviewDetailsStyle';
import { colors, wikiBadgeSize } from '../../../constants/theme';
import { SocialUrlIcon } from './SocialUrlIcon';
import { shareDataSagaAction } from '../../../actions';

export const ShareBadge = connect(
  state => ({}),
  dispatch => ({
    share: data => dispatch(shareDataSagaAction(data)),
  }),
)(props => {
  return (
    <SocialUrlIcon
      {...props}
      onPress={() => props.share(props.data)}
      iconName="share"
      size={wikiBadgeSize}
      color={colors.SHARE_FONT}
      containerStyle={[
        overviewDetailsStyle.badgeContainerStyle,
        {
          backgroundColor: colors.SHARE_BACKGROUND,
        },
      ]}
    />
  );
});
