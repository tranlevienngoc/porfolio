import * as dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

const date = new Date();
export const renderHour = (datetime: string | undefined) => {
  const timestamp = dayjs.utc(datetime, 'YYYY-MM-DD HH:mm:ss');
  const current = timestamp.local().hour();
  const next = timestamp.local().add(1, 'h').hour();
  return `${current}:00-${next}:00`;
};

export const formatDateCurrent = (stringFormat: string) => {
  return dayjs.utc(date).format(stringFormat);
};
