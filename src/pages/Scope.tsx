import {
  Avatar,
  Heading,
  HStack,
  SimpleGrid,
  StackDivider,
  Stat,
  StatLabel,
  StatNumber,
  VStack,
} from "@chakra-ui/react";
import BooleanText from "components/atoms/BooleanText";
import EntryCard from "components/scope/EntryCard";
import RatingView from "components/scope/RatingView";
import { format } from "date-fns";
import { useApi } from "hooks/useFetch";
import { useMemo } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useSearchParams } from "react-router-dom";
import { Osnova } from "types/osnova";
import { getTargetId } from "utils/common";

const Context = createContext(0);
const useScope = () => useContext(Context);

function Overview() {
  const id = useScope();
  const { data } = useApi<Osnova.Subsite.SubsiteResponse>(`/subsite?id=${id}`);

  if (!data || !data.result) return null;
  const {
    result: { subsite },
  } = data;

  return (
    <VStack divider={<StackDivider />} maxW="438px">
      <HStack spacing={10}>
        <Avatar
          name={subsite.name}
          size="2xl"
          src={`https://leonardo.osnova.io/${subsite.avatar.data.uuid}/-/scale_crop/300x300/-/format/webp/`}
        />
        <VStack>
          <Heading size="lg">{subsite.name}</Heading>
          <HStack justifyContent={"space-between"} minW="100%">
            <RatingView>{subsite.rating}</RatingView>
            <Stat>
              <StatLabel>Создан</StatLabel>
              <StatNumber>
                {format(subsite.created * 1000, "dd.LL.yy")}
              </StatNumber>
            </Stat>
          </HStack>
        </VStack>
      </HStack>
      <VStack divider={<StackDivider />}>
        <SimpleGrid columns={4} spacing={3}>
          <Stat>
            <StatLabel>Постов</StatLabel>
            <StatNumber>{subsite.counters.entries}</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Комментариев</StatLabel>
            <StatNumber>{subsite.counters.comments}</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Подписок</StatLabel>
            <StatNumber>{subsite.counters.subscriptions}</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Подписчиков</StatLabel>
            <StatNumber>{subsite.counters.subscribers}</StatNumber>
          </Stat>
        </SimpleGrid>

        <SimpleGrid
          columns={2}
          spacing={3}
          justifyContent="space-between"
          minW="100%"
        >
          <Stat>
            <StatLabel>Plus</StatLabel>
            <StatNumber>{<BooleanText value={subsite.isPlus} />}</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Подтвержден</StatLabel>
            <StatNumber>
              {<BooleanText value={subsite.isVerified} />}
            </StatNumber>
          </Stat>
        </SimpleGrid>
      </VStack>
    </VStack>
  );
}

function Entries() {
  const id = useScope();
  const { data } = useApi<Osnova.Entry.EntriesResponse>(
    `/user/${id}/entries`,
    undefined,
    "1.9"
  );

  const ownEntries = useMemo(
    () => (data ? data.result.filter((e) => e.author.id === id) : []),
    [data, id]
  );

  const stats = useMemo(() => {
    const result = {
      rating: 0,
      ratingCount: 0,
      comments: 0,
      reposts: 0,
      hits: 0,
      mostHitsEntry: ownEntries[0],
    };
    for (const entry of ownEntries) {
      result.rating += entry.likes.summ;
      result.ratingCount += entry.likes.count;
      result.comments += entry.commentsCount;
      result.reposts += Number(entry.isRepost);
      result.hits += entry.hitsCount;
      if (entry.hitsCount > result.mostHitsEntry.hitsCount) {
        result.mostHitsEntry = entry;
      }
    }
    return result;
  }, [ownEntries]);

  console.log(ownEntries);

  return (
    <VStack align="flex-start" divider={<StackDivider />} w="100%" maxW="438px">
      <Heading>Посты</Heading>

      <VStack align="flex-start" w="100%" pl="2">
        <SimpleGrid
          columns={2}
          spacing={1}
          justifyContent="space-between"
          minW="100%"
        >
          <RatingView>{stats.rating}</RatingView>
          <RatingView label="Оценок">{stats.ratingCount}</RatingView>
          <RatingView label="Оценки [минус]">
            {stats.ratingCount - stats.rating}
          </RatingView>
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

        {stats.mostHitsEntry && (
          <VStack align="flex-start">
            <Heading size="md">Наиболее просматриваемый</Heading>
            <EntryCard entry={stats.mostHitsEntry} />
          </VStack>
        )}
      </VStack>
    </VStack>
  );
}

function Scope() {
  const [searchParams] = useSearchParams();
  const id = getTargetId(searchParams.get("id") || "");

  return (
    <Context.Provider value={id}>
      <VStack align="start">
        <Overview />
        <Entries />
      </VStack>
    </Context.Provider>
  );
}

export default Scope;
