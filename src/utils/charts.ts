import type { ChartData } from "chart.js";
import { Osnova } from "types/osnova";
import { Common } from "types/utils";
import { getMonths } from "./common";
import { getRating } from "./rating";

type ActivityChartData = {
  years: ChartData<"bar", number[], string>;
  months: ChartData<"bar", number[], string>;
  days: ChartData<"bar", number[], string>;
  hours: ChartData<"radar", number[], string>;
  ratingByEntity: ChartData<"line", number[], string>;
};

function getStats<
  T extends {
    result?: Array<
      Common<
        Osnova.Entry.EntriesResponse["result"][0],
        Osnova.Comment.CommentsResponse["result"][0]
      >
    >;
  }
>(target: T, dsOpts = {}) {
  const d = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  const dd = { ...d, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0 };
  const stats: {
    years: Record<string, number>;
    months: Record<string, number>;
    days: Record<string, number>;
    hours: Record<string, number>;
    ratingByEntity: Record<string, { minus: number; plus: number }>;
  } = {
    years: {},
    months: {
      ...dd,
    },
    days: { ...d },
    hours: {
      ...d,
      12: 0,
      13: 0,
      14: 0,
      15: 0,
      16: 0,
      17: 0,
      18: 0,
      19: 0,
      20: 0,
      21: 0,
      22: 0,
      23: 0,
    },
    ratingByEntity: {},
  };
  for (const el of target?.result || []) {
    const dt = new Date(el.date * 1000);
    const year = dt.getUTCFullYear();
    const month = dt.getUTCMonth();
    const day = dt.getUTCDay();
    const hour = dt.getUTCHours();
    stats.years[year] = (stats.years[year] || 0) + 1;
    stats.months[month] = (stats.months[month] || 0) + 1;
    stats.days[day] = (stats.days[day] || 0) + 1;
    stats.hours[hour] = (stats.hours[hour] || 0) + 1;
    stats.ratingByEntity[el.id] = getRating(el.likes);
  }
  const ratingByEntity = [...Object.values(stats.ratingByEntity)];
  return {
    years: {
      datasets: [
        {
          data: [...Object.values(stats.years)],
          ...dsOpts,
        },
      ],
      labels: [...Object.keys(stats.years)],
    },
    months: {
      datasets: [{ data: [...Object.values(stats.months)], ...dsOpts }],
      labels: [...getMonths()],
    },
    days: {
      datasets: [{ data: [...Object.values(stats.days)], ...dsOpts }],
      labels: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    },
    hours: {
      datasets: [{ data: [...Object.values(stats.hours)], ...dsOpts }],
      labels: [...Object.keys(stats.hours)],
    },
    ratingByEntity: {
      datasets: [
        {
          data: [...ratingByEntity.map(({ minus }) => minus)],
          label: "Отрицательные",
          backgroundColor: "rgba(229,62,62, 0.2)",
          borderColor: "rgb(229,62,62)",
          borderWidth: 1,
        },
        {
          data: [...ratingByEntity.map(({ plus }) => plus)],
          label: "Положительные",
          backgroundColor: "rgba(72,187,120, 0.2)",
          borderColor: "rgb(72,187,120)",
          borderWidth: 1,
        },
      ],
      labels: [...Object.keys(stats.ratingByEntity)],
    },
  } as ActivityChartData;
}

export { getStats, type ActivityChartData };
