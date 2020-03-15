import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { fontFix } from '../lib/dimension';
import { default as Layout, default as layout } from './layout';

export const colors = {
  BACKGROUND: '#f2f2f2',
  LIST_CONTAINER_BACKGROUND: '#fafafa',
  LIST_CONTAINER_BACKGROUND_SHADOW: '#F9F9F9',
  LIST_ICON: '#4F8EF7',
  TOUCHABLE_UNDERLAY: '#fcfcfc',
  SPINNER: '#335D9C',

  PRIMARY: '#1e5284',
  PRIMARY_ALPHA: 'rgba(51, 93, 156, 0.95)',
  PRIMARY_ALPHA_2: 'rgba(51, 93, 156, 0.55)',
  ACCENT: '#08ce94',
  BORDER_GREY: '#95989A',
  DARK_GREY: '#636363',
  COOL_GREY: '#ebebeb',

  DARK_TEXT_PRIMARY: '#0c0b0c',
  DARK_TEXT_SECONDARY: '#332f33',

  LIGHT_TEXT_PRIMARY: '#ffffff',

  GRADIENT_LIHGT: '#27C9D8',
  GRADIENT_DARK: '#007ADD',

  FORM_LIGHT_TITLE: '#c4fcff',
  FORM_LIGHT_INPUT: '#fff',
  FORM_LIGHT_PLACEHOLDER: 'rgba(0,0,0,0.3)',

  BUTTON_PRIMARY_BG: '#323268',
  BUTTON_PRIMARY_TITLE: '#007ADD',

  BUTTON_SECONDARY_BG: 'rgba(22, 174, 249, 0.9)',
  BUTTON_SECONDARY_TITLE: '#fff',

  WIKI_FONT: '#4c4c4c',
  WIKI_BACKGROUND: '#e4e4e4',
  RANDOM_BACKGROUND: '#335D9C',
  WIKI_BORDER: '#dedede',

  YOUTUBE_BACKGROUND: '#c93a2f',
  YOUTUBE_FONT: '#fefcff',
  RANDOM_FONT: '#fefcff',

  HEADER_LEFT_COLOR: '#212121',

  BACKGROUND_LAUNCH_SUCCESS: '#29963f',
  BACKGROUND_LAUNCH_FAIL: '#FFCCCC',

  PRERENDER_IMAGE_BACKGROUND: '#d4d4d4',
  TABBAR_BACKGROUND: '#fff',

  SHARE_BACKGROUND: '#4191bd',
  SHARE_FONT: '#f2f2f2',
};

export const fontSize = {
  DETAILS_VIEW_TITLE: Layout.isSmallDevice ? 16 : 30,
  DETAILS_VIEW_SUBTITLE: Layout.isSmallDevice ? 12 : 26,
  DISPLAY: 24,
  TITLE: 20,
  SUB_TITLE: 16,
  BODY: 14,
  BUTTON: fontFix(14),
  DETAIL: 12,
  MINOR: 10,

  FORM_LABEL: 18,
  FORM_INPUT: 16,
};

const THUMB_WIDTH = 320;
const THUMB_HEIGHT = 320;

export const touchableOpacity = 0.75;
export const wikiBadgeSize = Layout.isSmallDevice ? wp('5%') : wp('3%');
export const detailViewImageSize = Layout.isSmallDevice ? wp('40%') : wp('45%');
export const detailViewCloseIconSize = Layout.isSmallDevice
  ? wp('8%')
  : wp('8%');
export const overviewListSmallIconSize = Layout.isSmallDevice
  ? wp('5.5%')
  : wp('2.5%');
export const overviewListBigIconSize = Layout.isSmallDevice
  ? wp('22%')
  : wp('100%');
export const overviewListNumColumns = Layout.isSmallDevice ? 1 : 2;
export const settingsListItemIconSize = Layout.isSmallDevice
  ? wp('8%')
  : wp('5%');
export const overviewListIconBorderWidth = 3;

export const mapSize = Layout.isSmallDevice ? wp('75%') : wp('85%');

const HEADER_WIDTH = 256 / 100;
const HEADER_HEIGHT = 38 / 100;

const SPLASH_WIDTH = 563 / 100;
const SPLASH_HEIGHT = 1059 / 100;

const headerWPercent = '7%';

export const splashImageWidth = SPLASH_WIDTH * wp('8%');
export const splashImageHeight = SPLASH_HEIGHT * wp('8%');

export const headerImageWidth = Layout.isSmallDevice
  ? HEADER_WIDTH * hp(headerWPercent)
  : HEADER_WIDTH * hp(headerWPercent);
export const headerImageHeight = Layout.isSmallDevice
  ? HEADER_HEIGHT * hp(headerWPercent)
  : HEADER_HEIGHT * hp(headerWPercent);
export const headerHeight = headerImageHeight * 2.3;
export const headerFontSize = headerHeight * 0.35;
export const headerBottomSpace =
  headerHeight * (layout.isSmallDevice ? 2 : 1.5);
export const headerLeftSize = headerHeight * 0.6;
export const countdownSize = Layout.isSmallDevice ? wp('4%') : wp('3%');

export const footerTabIconSize = hp('3%');

export const fontWeight = {
  FORM_LABEL: Layout.isAndroid ? '400' : '500',
};

export const fontFamily = {
  segoeUi: 'segoe-ui',
};

export const grid = {
  COLUMN: 24,
  ROW: 24,
};
