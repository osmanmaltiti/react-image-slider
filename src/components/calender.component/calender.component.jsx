import {
  add,
  eachDayOfInterval,
  endOfWeek,
  isSameMonth,
  isToday,
  parseJSON,
  startOfMonth,
  sub,
} from 'date-fns';
import { endOfMonth } from 'date-fns/esm';
import { useState } from 'react';
import { daysOfTheWeek, getPosition, label } from './calender.utils';

const CalenderComponent = () => {
  const today = Date.now();
  const [current, setCurrent] = useState(today);

  const days = eachDayOfInterval({
    start: endOfWeek(startOfMonth(current)),
    end: endOfWeek(endOfMonth(current)),
  });

  const next = () => setCurrent(add(startOfMonth(current), { months: 1 }));
  const prev = () => setCurrent(sub(startOfMonth(current), { months: 1 }));

  return (
    <div className="w-screen h-screen grid place-items-center">
      <span className="w-[80%]">
        <span className="flex flex-row items-center gap-6 mb-2">
          <button className="border p-1 px-3" onClick={prev}>
            prev
          </button>
          <h2>{label(days)}</h2>
          <button className="border p-1 px-3" onClick={next}>
            next
          </button>
        </span>
        <div className="w-full  h-[25rem] bg-gray-200 rounded-md shadow">
          <ul className="grid grid-cols-7 place-items-center py-2 font-semibold">
            {daysOfTheWeek.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul className="grid grid-cols-7 place-items-center">
            {getPosition(days).map((item, index) => (
              <li
                key={index}
                className={`${isSameMonth(item, current) && 'text-black'} ${
                  isToday(parseJSON(item)) &&
                  'font-bold bg-red-400 rounded-2xl p-4 text-white aspect-square'
                } py-4 text-lg text-gray-400`}>
                {typeof item !== 'number' ? item.getDate() : item}
              </li>
            ))}
          </ul>
        </div>
      </span>
    </div>
  );
};

export default CalenderComponent;
