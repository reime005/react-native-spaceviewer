import Moment from 'moment';
import getApiDateFormat from './getApiDateFormat';
import { DEFAULT_PARAM_PREV_DAYS_AGO } from '../../constants/api';

export default (fromDate, daysBack = DEFAULT_PARAM_PREV_DAYS_AGO) =>
  Moment(fromDate)
    .add(daysBack * -1, 'days')
    .format(getApiDateFormat);
