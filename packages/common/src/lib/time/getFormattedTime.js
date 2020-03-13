import Moment from 'moment';
import { defaultDateFormat } from '../../constants/defaultSettings';

export const getFormattedTime = (format = defaultDateFormat, date) => {
  return Moment(date)
    .format(format)
    .toString();
};
