import { Platform } from 'react-native';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../lib/dimension';

export default {
  window: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  isSmallDevice: SCREEN_WIDTH < 575,
  isLongDevice: SCREEN_WIDTH * 1.8 <= SCREEN_HEIGHT,
  isAndroid: Platform.OS === 'android',
  isIOS: Platform.OS === 'ios',
};
