import {
  VStack,
  Progress,
  SimpleGrid,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  HStack,
} from "@chakra-ui/react";
import RatingByUser from "components/scope/Stat/RatingByUser";
import TotalTable from "components/scope/total/TotalTable";
import { addMilliseconds, formatDistance } from "date-fns";
import { useApi } from "hooks/useFetch";
import { useState, useMemo, useEffect } from "react";
import type { Osnova } from "types/osnova";
import { calcLikers } from "utils/rating";

interface TotalProps {
  comments: Osnova.Comment.CommentsResponse;
}

const timeoutTime = 400;

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
    let timeout = setTimeout(
      () => setCommentIndex((prev) => prev + 1),
      timeoutTime
    );
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
    <VStack position="relative" w="100%">
      {comments?.result?.length > commentIndex && (
        <VStack w="100%" align="flex-end">
          <Progress
            size="lg"
            value={(commentIndex / comments?.result?.length || 1) * 100}
            w="100%"
            rounded="md"
          />
          <HStack spacing={2}>
            <Text>Осталось:</Text>
            <Text>
              {formatDistance(
                new Date(),
                addMilliseconds(
                  new Date(),
                  timeoutTime * (comments?.result?.length - commentIndex)
                ),
                { includeSeconds: true }
              )}
            </Text>
          </HStack>
        </VStack>
      )}

      <SimpleGrid
        columns={{ md: 2, base: 1 }}
        spacing={5}
        justifyContent="space-between"
        minW="100%"
      >
        {!![...Object.entries(commentsLikers)].length && (
          <Stat>
            <StatLabel>Уникальных пользователей</StatLabel>
            <StatNumber>
              {[...Object.entries(commentsLikers)].length}
            </StatNumber>
          </Stat>
        )}
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
