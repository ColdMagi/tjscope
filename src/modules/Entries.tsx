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
import { useMemo } from "react";
import { Osnova } from "types/osnova";
import { getStats } from "utils/charts";
import { getRating } from "utils/rating";

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

  const options = useConst({ plugins: { legend: { display: false } } });
  const entryDatasetOptions = useConst({
    borderColor: "rgb(237,137,54)",
    backgroundColor: "rgba(237,137,54,0.4)",
    borderWidth: 1,
  });

  const charts = getStats(data || {}, entryDatasetOptions);

  return (
    <Tabs variant={"enclosed"} isFitted w="100%">
      <TabList w="100%">
        <Tab>Статистика</Tab>
        <Tab>Активность</Tab>
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
      </TabPanels>
    </Tabs>
  );
}

export default Entries;
