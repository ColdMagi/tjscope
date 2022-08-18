import type { Osnova } from "types/osnova";

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

const calcLikers = (source: Osnova.Comment.LikersResponse[]) => {
  const result: Osnova.Likers.Likers = {};
  for (const data of source) {
    for (const [id, val] of Object.entries(data.result)) {
      if (!Reflect.has(result, id)) {
        result[id] = {
          minus: 0,
          plus: 0,
          total: 0,
          avatar_url: "",
          name: "",
          id,
        };
      }
      result[id].minus += Number(val.sign < 0);
      result[id].plus += Number(val.sign > 0);
      result[id].total++;

      result[id].avatar_url = val.avatar_url;
      result[id].name = val.name;
    }
  }
  return result;
};

export { getRating, calcLikers };
