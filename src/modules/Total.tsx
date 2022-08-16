import { VStack, Progress, SimpleGrid } from "@chakra-ui/react";
import RatingByUser from "components/scope/Stat/RatingByUser";
import TotalTable from "components/scope/TotalTable";
import { useApi } from "hooks/useFetch";
import { useState, useMemo, useEffect } from "react";
import type { Osnova } from "types/osnova";

interface TotalProps {
  comments: Osnova.Comment.CommentsResponse;
}

function Total({ comments }: TotalProps) {
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
    setCommentsLikers((prev) => {
      const result = { ...prev };
      for (const [id, val] of Object.entries(data.result)) {
        if (!Reflect.has(result, id)) {
          result[id] = {
            minus: 0,
            plus: 0,
            avatar_url: "",
            name: "",
          };
        }
        result[id].minus += Number(val.sign < 0);
        result[id].plus += Number(val.sign > 0);

        result[id].avatar_url = val.avatar_url;
        result[id].name = val.name;
      }
      return result;
    });
    let timeout = setTimeout(() => setCommentIndex((prev) => prev + 1), 2000);
    return () => clearTimeout(timeout);
  }, [data]);

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
