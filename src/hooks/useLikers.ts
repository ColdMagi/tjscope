import { useMemo, useState, useEffect } from "react";
import type { Osnova } from "types/osnova";
import { calcLikers } from "utils/rating";
import { useApi } from "./useFetch";

const timeoutTime = 400;

export type UseLikersIdSource =
  | { result: { id: number | string }[] }
  | undefined;

function useLikers(idSource: UseLikersIdSource, target: string) {
  const worker = useMemo(
    () =>
      Worker &&
      new Worker(new URL("workers/likers.worker.js", import.meta.url)),
    []
  );
  const [rawLikers, setRawLikers] = useState<Osnova.Comment.LikersResponse[]>(
    []
  );
  const [likers, setLikers] = useState<Osnova.Likers.Likers>({});
  const [index, setIndex] = useState(0);

  const { data } = useApi<Osnova.Comment.LikersResponse>(
    `/${target}/likers/${(idSource?.result || [])[index]?.id}`,
    undefined,
    "1.9"
  );

  const stats = useMemo(() => {
    const result = {
      plus: { ...(likers[0] || { plus: 0 }), id: "0" },
      minus: { ...(likers[0] || { minus: 0 }), id: "0" },
      total: { ...(likers[0] || { plus: 0, minus: 0 }), id: "0" },
    };

    for (const [id, cmt] of Object.entries(likers)) {
      if (cmt.minus > result.minus.minus) {
        result.minus = { ...cmt, id };
      }
      if (cmt.plus > result.plus.plus) {
        result.plus = { ...cmt, id };
      }
      if (cmt.plus + cmt.minus > result.total.plus + result.total.minus) {
        result.total = { ...cmt, id };
      }
    }
    return result;
  }, [likers]);

  useEffect(() => {
    if (!data) return;
    setRawLikers((prev) => [...prev, data]);
    let timeout = setTimeout(() => setIndex((prev) => prev + 1), timeoutTime);
    return () => clearTimeout(timeout);
  }, [data]);

  useEffect(() => {
    if (!worker) return;
    worker.onmessage = (ev) => setLikers(ev.data);
  }, [worker]);

  useEffect(() => {
    if ((idSource?.result || [])[index]) return;
    if (worker) {
      worker.postMessage(rawLikers);
    } else {
      setLikers(calcLikers(rawLikers));
    }
  }, [rawLikers, index, idSource, worker]);

  return {
    size: idSource?.result?.length || 0,
    stats,
    loading: (idSource?.result?.length || 0) > index,
    timeoutTime,
    loaded: index,
    data: likers || {},
  };
}

export default useLikers;
