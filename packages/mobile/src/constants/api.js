import { colors } from './theme';

const URI_MAIN = 'https://launchlibrary.net/1.4/';

export const URI_NEXT_LAUNCHES = URI_MAIN + 'launch';
export const URI_PREV_LAUNCHES = URI_MAIN + 'launch';
export const URI_SEARCH_LAUNCHES = URI_MAIN + 'launch';

export const DEFAULT_PARAM_PREV_LIMIT = 500;
export const DEFAULT_PARAM_PREV_DAYS_AGO = 30;

export const DEFAULT_PARAM_SEARCH_NAME = '';

export const DEFAULT_PARAM_NEXT = 12;
export const DEFAULT_PARAM_OFFSET = 0;
export const DEFAULT_PARAM_MODE = 'verbose';
export const DEFAULT_PARAM_FIELDS = '';

export const DEFAULT_GET_TIMEOUT_MILISECONDS = 10000;

export const statusToMessage = status => {
  switch (status) {
    case 1:
      return 'Ready to Launch';
    case 2:
      return 'Launch is canceled/on hold';
    case 3:
      return 'Launch was successful';
    case 4:
      return 'Launch was a fail';
  }
};

export const statusToIconName = status => {
  switch (status) {
    case 1:
    case 3:
      return 'check-circle-outline';
    case 2:
    case 4:
      return 'cancel';
  }
};

export const statusToColor = status => {
  switch (status) {
    case 1:
    case 3:
      return colors.BACKGROUND_LAUNCH_SUCCESS;
    case 2:
    case 4:
      return colors.BACKGROUND_LAUNCH_FAIL;
  }
};
