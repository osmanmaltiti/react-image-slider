import { getDaysInMonth, sub } from 'date-fns';

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

export const getPosition = (days) => {
  const [firstDay, ...rest] = days;
  const restOfDays = rest.map((item) => item);
  const daysBefore = [];
  const daysAfter = [];

  const dayStr = daysOfTheWeek[firstDay.getDay()];

  const daysArr = [];

  for (let day of daysOfTheWeek) {
    if (day === dayStr) {
      daysArr.push(firstDay);
      break;
    } else {
      daysArr.push('');
    }
  }

  const lastMonthCount = getDaysInMonth(sub(firstDay, { months: 1 }));
  const currentMonthCount = getDaysInMonth(firstDay);
  const lastMonthdiff = 35 - lastMonthCount;

  for (let i = lastMonthCount; i > lastMonthCount - lastMonthdiff; i--) {
    daysBefore.unshift(i);
  }

  for (let i = 1; i <= 35 - currentMonthCount - lastMonthdiff; i++) {
    daysAfter.push(i);
  }

  return [...daysArr, ...restOfDays].filter(Boolean);
};

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
