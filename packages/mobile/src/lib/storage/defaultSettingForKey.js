import * as keys from '../../constants/settings';
import { defaultDateFormat } from '../../constants/defaultSettings';

export const defaultSettingForKey = key => {
  switch (key) {
    case keys.SETTING_FORMAT_DATE:
      return defaultDateFormat;
    default:
      return '';
  }
};
