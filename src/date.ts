const cacheFormattedDayDate: { [key: number]: string } = {};
const format = (date: Date): string =>
  cacheFormattedDayDate[date.getTime()] ??
  (cacheFormattedDayDate[date.getTime()] = `${date.getFullYear()}-${(
    date.getMonth() +
    1 +
    ""
  ).padStart(2, "0")}-${(date.getDate() + "").padStart(2, "0")}`);

const today = format(new Date());
const yesterday = format(new Date(Date.now() - 24 * 60 * 60 * 1000));
const oneWeekAgo = format(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000));
const oneMonthAgo = format(new Date(Date.now() - 30 * 24 * 60 * 60 * 1000));

const cacheGetWeek: { [key: number]: { year: number; week: number } } = {};
const getWeek = (date: Date): { year: number; week: number } => {
  if (cacheGetWeek[date.getTime()]) {
    return cacheGetWeek[date.getTime()];
  }
  var d = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
  var dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return (cacheGetWeek[date.getTime()] = {
    year: yearStart.getUTCFullYear(),
    week: Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7),
  });
};

const getSundayFromWeek = ({
  year,
  week,
}: {
  year: number;
  week: number;
}): Date => {
  if (isNaN(year)) {
    throw Error("NaN year");
  }

  const startOfYear = new Date(`${year}-01-01`);
  while (getWeek(startOfYear).week !== 1) {
    startOfYear.setDate(startOfYear.getDate() + 1);
  }

  var sunday = new Date(year, 0, startOfYear.getDate() + week * 7);
  while (sunday.getDay() !== 0) {
    sunday.setDate(sunday.getDate() - 1);
  }
  return new Date(format(sunday));
};

const getMondayFromWeek = ({
  year,
  week,
}: {
  year: number;
  week: number;
}): Date => {
  const d = getSundayFromWeek({ year, week });
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
  return new Date(d.setDate(diff));
};

export default {
  format,
  today,
  yesterday,
  oneWeekAgo,
  oneMonthAgo,
  getWeek,
  getMondayFromWeek,
  getSundayFromWeek,
};
