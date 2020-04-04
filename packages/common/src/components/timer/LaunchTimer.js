import React from 'react';
import { Text } from 'react-native';
//eslint-disable-next-line
import CountDown from 'react-native-countdown-component';
import overviewDetailsStyle from '../../styles/overviewDetailsStyle';
import { getFormattedTime } from '../../lib/time/getFormattedTime';
import { SETTING_FORMAT_DATE } from '../../constants/settings';
import { CustomTouchableHighlight } from '../pure/CustomTouchableHighlight';
import { colors, countdownSize } from '../../constants/theme';

export class LaunchTimer extends React.PureComponent {
  constructor(props) {
    super(props);

    const seconds = this._getSecondsSinceNow(props.net);

    this.state = {
      seconds,
      countdown: seconds ? true : false,
    };
  }

  _toggle = () => {
    const { net, countdown, settings } = this.props;

    const seconds = this._getSecondsSinceNow(net);

    this.setState({
      countdown: seconds > 0 && !this.state.countdown,
    });
  };

  _getSecondsSinceNow = () => {
    const then = new Date(this.props.net);
    const now = new Date();

    const secondsSince = then - now;

    return secondsSince > 0 ? secondsSince / 1000 : 0;
  };

  render() {
    const { countdown } = this.state;

    const { net, settings } = this.props;

    const dateFormat = settings[SETTING_FORMAT_DATE];

    return (
      <CustomTouchableHighlight
        onPress={this._toggle}
        style={overviewDetailsStyle.timerContainer}
      >
        {countdown ? (
          <CountDown
            digitBgColor={colors.BACKGROUND_LAUNCH_SUCCESS}
            digitTxtColor={colors.FORM_LIGHT_INPUT}
            until={this._getSecondsSinceNow()}
            onFinish={this._toggle}
            size={countdownSize}
          />
        ) : (
          <Text style={overviewDetailsStyle.timerText}>
            {getFormattedTime(dateFormat, net)}
          </Text>
        )}
      </CustomTouchableHighlight>
    );
  }
}
