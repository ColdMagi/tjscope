import {
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useConst,
  VStack,
} from "@chakra-ui/react";
import ActivityCharts from "components/chart/Activity";
import EntryCard from "components/scope/EntryCard";
import RatingView from "components/scope/RatingView";
import StatCat from "components/scope/StatCat";
import { useApiProxy } from "hooks/useFetch";
import useLikers, { UseLikersData } from "hooks/useLikers";
import { useEffect, useMemo, useState } from "react";
import type { Osnova } from "types/osnova";
import { getStats } from "utils/charts";
import { getRating } from "utils/rating";
import Rating from "./Rating";

function useEntriesLikers(source: Osnova.Entry.EntriesResponse | undefined) {
  const [currentId, setCurrentId] = useState<string | number | undefined>(
    undefined
  );
  const [cLikers, setCLikers] = useState<UseLikersData>(undefined);
  const { data } = useApiProxy<Osnova.Entry.LikersResponse>(
    `/entry/likers?id=${currentId}`
  );
  const likers = useLikers(source, cLikers, setCurrentId);

  useEffect(() => {
    if (!data) return;
    const result: UseLikersData = { result: {} };
    for (const [id, val] of Object.entries(data.data.likers)) {
      const v = val as Osnova.Entry.Liker;
      result.result[id] = {
        avatar_url: v.avatar_url,
        name: v.user_name,
        sign: v.sign,
      };
    }
    setCLikers(result);
  }, [data]);

  return likers;
}

function Entries({ data }: { data: Osnova.Entry.EntriesResponse | undefined }) {
  const stats = useMemo(() => {
    const result = {
      rating: 0,
      ratingPlus: 0,
      ratingMinus: 0,
      comments: 0,
      reposts: 0,
      hits: 0,
      mostHits: (data?.result || [])[0],
      mostLiked: (data?.result || [])[0],
      mostDisliked: (data?.result || [])[0],
    };
    for (const entry of data?.result || []) {
      const { minus, plus } = getRating(entry.likes);
      result.rating += plus - minus;
      result.ratingPlus += plus;
      result.ratingMinus += minus;
      result.comments += entry.commentsCount;
      result.reposts += Number(entry.isRepost);
      result.hits += entry.hitsCount;
      const { plus: pPlus } = getRating(result.mostLiked.likes);
      const { minus: pMinus } = getRating(result.mostDisliked.likes);
      if (entry.hitsCount > result.mostHits.hitsCount) {
        result.mostHits = entry;
      }
      if (plus > pPlus) {
        result.mostLiked = entry;
      }
      if (minus > pMinus) {
        result.mostDisliked = entry;
      }
    }
    return result;
  }, [data]);

  const likers = useEntriesLikers(data);

  const options = useConst({ plugins: { legend: { display: false } } });
  const entryDatasetOptions = useConst({
    borderColor: "rgb(237,137,54)",
    backgroundColor: "rgba(237,137,54,0.4)",
    borderWidth: 1,
  });

  const charts = getStats(data || {}, entryDatasetOptions);

  return (
    <Tabs
      variant={"soft-rounded"}
      size={{ base: "sm", md: "md" }}
      maxW="100%"
      w="100%"
      colorScheme="orange"
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
      <TabPanels w="100%">
        <TabPanel>
          <VStack align="flex-start" w="100%" pl="2" spacing={4}>
            <SimpleGrid
              columns={{ base: 2, md: 3 }}
              spacing={1}
              justifyContent="space-between"
              minW="100%"
            >
              <RatingView>{stats.rating}</RatingView>
              <RatingView label="Оценок [+]">{stats.ratingPlus}</RatingView>
              <RatingView label="Оценки [-]">{stats.ratingMinus}</RatingView>
              <Stat>
                <StatLabel>Комментариев</StatLabel>
                <StatNumber>{stats.comments}</StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Просмотров</StatLabel>
                <StatNumber>{stats.hits}</StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Репостов</StatLabel>
                <StatNumber>{stats.reposts}</StatNumber>
              </Stat>
            </SimpleGrid>
            {stats.mostHits && (
              <StatCat label="Наиболее просматриваемый">
                <EntryCard entry={stats.mostHits} />
              </StatCat>
            )}

            {stats.mostLiked && (
              <StatCat label="Наибольшее количество плюсов">
                <EntryCard entry={stats.mostLiked} />
              </StatCat>
            )}

            {stats.mostDisliked && (
              <StatCat label="Наибольшее количество минусов">
                <EntryCard entry={stats.mostDisliked} />
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

export default Entries;
