import {
  useConst,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";
import ActivityCharts from "components/chart/Activity";
import CommentCard from "components/scope/CommentCard";
import RatingView from "components/scope/RatingView";
import StatCat from "components/scope/StatCat";
import { useApi } from "hooks/useFetch";
import useLikers, { UseLikersData } from "hooks/useLikers";
import { useMemo, useState } from "react";
import type { Osnova } from "types/osnova";
import { getStats } from "utils/charts";
import { getRating } from "utils/rating";
import Rating from "./Rating";

function Comments({
  data,
}: {
  data: Osnova.Comment.CommentsResponse | undefined;
}) {
  const stats = useMemo(() => {
    const result = {
      rating: 0,
      ratingPlus: 0,
      ratingMinus: 0,
      mostLiked: (data?.result || [])[0],
      mostDisliked: (data?.result || [])[0],
    };
    for (const entry of data?.result || []) {
      const { plus, minus } = getRating(entry.likes);
      result.rating += plus - minus;
      result.ratingPlus += plus;
      result.ratingMinus += minus;
      const { plus: pPlus } = getRating(result.mostLiked.likes);
      const { minus: pMinus } = getRating(result.mostDisliked.likes);
      if (plus > pPlus) {
        result.mostLiked = entry;
      }
      if (minus > pMinus) {
        result.mostDisliked = entry;
      }
    }
    return result;
  }, [data]);

  const [currentId, setCurrentId] = useState<string | number | undefined>(
    undefined
  );
  const { data: cLikers } = useApi<UseLikersData>(
    `/comment/likers/${currentId}`,
    undefined,
    "1.9"
  );
  const likers = useLikers(data, cLikers, setCurrentId);

  const options = useConst({ plugins: { legend: { display: false } } });
  const commentDatasetOptions = useConst({
    borderColor: "rgb(56,178,172)",
    backgroundColor: "rgba(56,178,172,0.4)",
    borderWidth: 1,
  });

  const charts = getStats(data || {}, commentDatasetOptions);

  return (
    <Tabs
      variant={"soft-rounded"}
      size={{ base: "sm", md: "md" }}
      maxW="100%"
      w="100%"
      colorScheme="teal"
    >
      <TabList
        minW="0"
        maxW="100%"
        overflowX="auto"
        sx={{
          scrollbarWidth: "none",
          "::-webkit-scrollbar": { display: "none" },
          WebkitOverflowScrolling: "touch",
        }}
        px="1"
      >
        <Tab>Статистика</Tab>
        <Tab>Активность</Tab>
        <Tab>Оценки</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <VStack align="flex-start" w="100%" pl="2" spacing={4}>
            <SimpleGrid
              columns={3}
              spacing={1}
              justifyContent="space-between"
              minW="100%"
            >
              <RatingView>{stats.rating}</RatingView>
              <RatingView label="Оценок [+]">{stats.ratingPlus}</RatingView>
              <RatingView label="Оценки [-]">{stats.ratingMinus}</RatingView>
            </SimpleGrid>

            {stats.mostLiked && (
              <StatCat label="Наибольшее количество плюсов">
                <CommentCard comment={stats.mostLiked} />
              </StatCat>
            )}

            {stats.mostDisliked && (
              <StatCat label="Наибольшее количество минусов">
                <CommentCard comment={stats.mostDisliked} />
              </StatCat>
            )}
          </VStack>
        </TabPanel>
        <TabPanel>
          <ActivityCharts data={charts} options={options} />
        </TabPanel>
        <TabPanel>
          <Rating {...likers} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Comments;
