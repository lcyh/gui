/*
 * @Author: changluo
 * @Description:
 */
import dayjs from 'dayjs';

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
const DATE_FORMAT = 'YYYY-MM-DD';

export function formatToDateTime(
  date: dayjs.Dayjs | undefined = undefined,
  format = DATE_TIME_FORMAT
): string {
  if (!date) {
    return '';
  }
  return dayjs(date).format(format);
}

export function formatToDate(
  date: dayjs.Dayjs | undefined = undefined,
  format = DATE_FORMAT
): string {
  if (!date) {
    return '';
  }
  return dayjs(date).format(format);
}

export const dateUtil = dayjs;
