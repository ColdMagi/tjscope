import { VStack, Progress, SimpleGrid } from "@chakra-ui/react";
import RatingByUser from "components/scope/Stat/RatingByUser";
import TotalTable from "components/scope/TotalTable";
import { useApi } from "hooks/useFetch";
import { useState, useMemo, useEffect } from "react";
import type { Osnova } from "types/osnova";
import { calcLikers } from "utils/rating";

interface TotalProps {
  comments: Osnova.Comment.CommentsResponse;
}

function Total({ comments }: TotalProps) {
  const commentsLikersWorker = useMemo(
    () =>
      Worker &&
      new Worker(
        new URL("./workers/commentsLikers.worker.js", import.meta.url)
      ),
    []
  );

  const [rawCommentsLikers, setRawCommentsLikers] = useState<
    Osnova.Comment.LikersResponse[]
  >([]);
  const [commentsLikers, setCommentsLikers] = useState<Osnova.Likers.Likers>(
    {}
  );
  const [commentIndex, setCommentIndex] = useState(0);
  const { data } = useApi<Osnova.Comment.LikersResponse>(
    `/comment/likers/${(comments?.result || [])[commentIndex]?.id}`,
    undefined,
    "1.9"
  );

  const commentStats = useMemo(() => {
    const result = {
      plus: { ...(commentsLikers[0] || { plus: 0 }), id: "0" },
      minus: { ...(commentsLikers[0] || { minus: 0 }), id: "0" },
      total: { ...(commentsLikers[0] || { plus: 0, minus: 0 }), id: "0" },
    };

    for (const [id, cmt] of Object.entries(commentsLikers)) {
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
  }, [commentsLikers]);

  useEffect(() => {
    if (!data) return;
    setRawCommentsLikers((prev) => [...prev, data]);
    let timeout = setTimeout(() => setCommentIndex((prev) => prev + 1), 400);
    return () => clearTimeout(timeout);
  }, [data]);

  useEffect(() => {
    if (!commentsLikersWorker) return;
    commentsLikersWorker.onmessage = (ev) => setCommentsLikers(ev.data);
  }, [commentsLikersWorker]);

  useEffect(() => {
    if ((comments?.result || [])[commentIndex]) return;
    if (commentsLikersWorker) {
      commentsLikersWorker.postMessage(rawCommentsLikers);
    } else {
      setCommentsLikers(calcLikers(rawCommentsLikers));
    }
  }, [rawCommentsLikers, commentIndex, comments, commentsLikersWorker]);

  return (
    <VStack position="relative">
      {comments?.result?.length > commentIndex && (
        <Progress size="xs" isIndeterminate w="100%" />
      )}

      <SimpleGrid
        columns={{ md: 2, base: 1 }}
        spacing={5}
        justifyContent="space-between"
        minW="100%"
      >
        {!!+commentStats.plus.id && (
          <RatingByUser {...commentStats.plus} label="Больше всего плюсов" />
        )}
        {!!+commentStats.minus.id && (
          <RatingByUser {...commentStats.minus} label="Больше всего минусов" />
        )}
        {!!+commentStats.total.id && (
          <RatingByUser {...commentStats.total} label="Больше всего оценок" />
        )}
      </SimpleGrid>

      {comments?.result?.length <= commentIndex && (
        <TotalTable likers={commentsLikers} />
      )}
    </VStack>
  );
}

export default Total;
