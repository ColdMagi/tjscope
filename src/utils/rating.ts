import { Osnova } from "types/osnova";

const getRating = <T extends Pick<Osnova.Entry.Likes, "count" | "summ">>({
  count,
  summ,
}: T) => {
  let plus = summ;
  let minus = count - plus;

  if (summ < 0) {
    plus = Math.abs(count - (count - summ) / 2);
    minus = plus + summ * -1;
  }

  return { minus, plus };
};

export { getRating };
