# @codler/utils

## Install

```bash
npm i @codler/utils
```

## Reference

#### date

```js
import { date } from "@codler/utils";
date.format;
date.today;
date.yesterday;
date.oneWeekAgo;
date.oneMonthAgo;
date.getWeek;
date.getMondayFromWeek;
date.getSundayFromWeek;
```

| Method            | Notes                                          |
| ----------------- | ---------------------------------------------- |
| format            | `(date: Date) => YYYY-MM-DD`                   |
| today             | `YYYY-MM-DD`                                   |
| yesterday         | `YYYY-MM-DD`                                   |
| oneWeekAgo        | `YYYY-MM-DD`                                   |
| oneMonthAgo       | `YYYY-MM-DD`                                   |
| getWeek           | `(date: Date): { year: number; week: number }` |
| getMondayFromWeek | `({ year: number; week: number }): Date`       |
| getSundayFromWeek | `({ year: number; week: number }): Date`       |

## Maintainer

[Han Lin Yap](https://github.com/codler)
