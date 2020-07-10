const cacheFormattedDayDate: { [key: number]: string } = {};
const formattedDayDate = (date: Date) =>
  cacheFormattedDayDate[date.getTime()] ??
  (cacheFormattedDayDate[date.getTime()] = `${date.getFullYear()}-${(
    date.getMonth() +
    1 +
    ""
  ).padStart(2, "0")}-${(date.getDate() + "").padStart(2, "0")}`);

export const today = formattedDayDate(new Date());
export const yesterday = formattedDayDate(
  new Date(Date.now() - 24 * 60 * 60 * 1000)
);
export const oneWeekAgo = formattedDayDate(
  new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
);
export const oneMonthAgo = formattedDayDate(
  new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
);

const cacheGetWeek: { [key: number]: number } = {};
export const getWeek = (date: Date): number => {
  if (cacheGetWeek[date.getTime()]) {
    return cacheGetWeek[date.getTime()];
  }
  var d = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
  var dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return (cacheGetWeek[date.getTime()] = Math.ceil(
    ((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7
  ));
};

export const getSundayFromWeekNum = (weekNum: number, year: number): Date => {
  var sunday = new Date(year, 0, 1 + weekNum * 7);
  while (sunday.getDay() !== 0) {
    sunday.setDate(sunday.getDate() - 1);
  }
  return new Date(formattedDayDate(sunday));
};

export const getMondayFromWeekNum = (weekNum: number, year: number): Date => {
  const d = getSundayFromWeekNum(weekNum, year);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
  return new Date(d.setDate(diff));
};

export default formattedDayDate;
