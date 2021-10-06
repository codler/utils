# @codler/utils

## Install

```bash
npm i @codler/utils
```

## Reference

#### adBlock

```js
import { adBlock } from "@codler/utils";
await adBlock.checkIsEnabled();
adBlock.isEnabled();
```

| Method         | Notes              |
| -------------- | ------------------ |
| checkIsEnabled | `Promise<boolean>` |
| isEnabled      | `boolean`          |

#### date

```js
import { date } from "@codler/utils";
date.format(new Date()); // 2020-01-01
date.today; // 2020-01-01
date.yesterday; // 2020-01-01
date.oneWeekAgo; // 2020-01-01
date.oneMonthAgo; // 2020-01-01
date.getWeek(new Date()); // { year: 2020, week: 1 }
date.getMondayFromWeek({ year: 2020, week: 1 }); // Date object
date.getSundayFromWeek({ year: 2020, week: 1 }); // Date object
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

#### debounce

```js
import { debounce } from "@codler/utils";
debounce(() => void, 100);
```

| Parameter | Notes      |
| --------- | ---------- |
| func      | `function` |
| wait      | `number`   |

## Maintainer

[Han Lin Yap](https://github.com/codler)
