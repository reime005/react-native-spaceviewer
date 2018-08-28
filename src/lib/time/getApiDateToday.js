import Moment from 'moment';
import getApiDateFormat from './getApiDateFormat';

export default () => Moment().format(getApiDateFormat);
