import {
  endOfWeek,
  isToday,
  nextSunday,
  previousSunday,
  startOfWeek,
} from 'date-fns';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import { useState } from 'react';
import { daysOfTheWeek, findSchedule, label } from './schedule.utils';

const Scheduler = () => {
  const today = Date.now();
  const newToday = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(newToday.getDate() + 1);

  const [current, setCurrent] = useState(today);

  const days = eachDayOfInterval({
    start: startOfWeek(current),
    end: endOfWeek(current),
  });

  const next = () => setCurrent(nextSunday(current));

  const prev = () => setCurrent(previousSunday(current));

  return (
    <div className="w-screen h-screen bg-white grid">
      <span className="flex flex-col m-auto w-[70%] h-[60%]">
        <span className="flex flex-row items-center gap-6 mb-2">
          <button className="border p-1 px-3" onClick={prev}>
            prev
          </button>
          <h2>{label(days)}</h2>
          <button className="border p-1 px-3" onClick={next}>
            next
          </button>
        </span>
        <div className="flex-grow border rounded shadow flex flex-col">
          <ul className="grid grid-cols-7 place-items-center font-medium w-full">
            {days.map((day, index) => (
              <li
                key={index}
                className={`${
                  isToday(day) && 'bg-red-200 '
                } flex flex-col border w-full px-2`}>
                <h3>{daysOfTheWeek[day.getDay()]}</h3>
                <p>{day.getDate()}</p>
              </li>
            ))}
          </ul>
          {[[today, tomorrow], [today], [tomorrow]].map((user, index2) => (
            <ul
              key={index2}
              className="grid grid-cols-7 place-items-center font-medium w-full">
              {days.map((day, index3) => (
                <li
                  key={index3}
                  className="flex flex-col border w-full h-[3rem] px-2">
                  {findSchedule(user, day)}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </span>
    </div>
  );
};

export default Scheduler;
