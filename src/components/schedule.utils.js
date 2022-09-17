import { parseJSON } from 'date-fns';

export const daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const monthsOfTheYear = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const label = (days) => {
  const start = days.at(0);
  const end = days.at(-1);

  const startOfWeek = {
    year: start.getFullYear(),
    month: start.getMonth(),
    date: start.getDate(),
  };

  const endOfWeek = {
    year: end.getFullYear(),
    month: end.getMonth(),
    date: end.getDate(),
  };

  const toLabel =
    endOfWeek.month !== startOfWeek.month
      ? `${monthsOfTheYear[startOfWeek.month]} ${startOfWeek.date} - ${
          monthsOfTheYear[endOfWeek.month]
        } ${endOfWeek.date}`
      : `${monthsOfTheYear[startOfWeek.month]} ${startOfWeek.date} - ${
          endOfWeek.date
        }`;
  return toLabel;
};

export const findSchedule = (user, day) => {
  let schedule = user.find(
    (item) => day.toDateString() === parseJSON(item).toDateString()
  );

  if (schedule) return parseJSON(schedule).toDateString();
  return '-';
};
