import {
  Avatar,
  Divider,
  Heading,
  HStack,
  SimpleGrid,
  StackDivider,
  Stat,
  StatLabel,
  StatNumber,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import BooleanText from "components/atoms/BooleanText";
import EntryCard from "components/scope/EntryCard";
import RatingView from "components/scope/RatingView";
import { format } from "date-fns";
import { useApi } from "hooks/useFetch";
import { PropsWithChildren, useMemo } from "react";
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
    <>
      <HStack
        spacing={10}
        position="sticky"
        top="0"
        bg="white"
        zIndex="1000"
        pt="5"
        pb="2"
        px="4"
      >
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
      <Divider w="438px" />
      <VStack divider={<StackDivider />} w="438px">
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
    </>
  );
}

function StatCat({ label, children }: PropsWithChildren<{ label: string }>) {
  return (
    <VStack align="flex-start" minW="100%">
      <Heading size="md">{label}</Heading>
      {children}
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
      mostHits: ownEntries[0],
      mostLiked: ownEntries[0],
      mostDisliked: ownEntries[0],
    };
    for (const entry of ownEntries) {
      result.rating += entry.likes.summ;
      result.ratingCount += entry.likes.count;
      result.comments += entry.commentsCount;
      result.reposts += Number(entry.isRepost);
      result.hits += entry.hitsCount;
      if (entry.hitsCount > result.mostHits.hitsCount) {
        result.mostHits = entry;
      }
      if (entry.likes.summ > result.mostLiked.likes.summ) {
        result.mostLiked = entry;
      }
      if (
        entry.likes.count - entry.likes.summ >
        result.mostDisliked.likes.count - result.mostDisliked.likes.summ
      ) {
        result.mostDisliked = entry;
      }
    }
    return result;
  }, [ownEntries]);

  console.log(ownEntries);

  return (
    <VStack align="flex-start" w="100%" pl="2" spacing={4}>
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
  );
}

function Comments() {
  const id = useScope();
  const { data } = useApi(`/user/${id}/comments`, undefined, "1.9");

  console.log(data);

  return <VStack align="flex-start" w="100%" pl="2" spacing={4}></VStack>;
}

function Scope() {
  const [searchParams] = useSearchParams();
  const id = getTargetId(searchParams.get("id") || "");

  return (
    <Context.Provider value={id}>
      <VStack align="start">
        <Overview />

        <Tabs variant={"enclosed"}>
          <TabList>
            <Tab>Посты</Tab>
            <Tab>Комментарии</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <VStack
                align="flex-start"
                divider={<StackDivider />}
                w="100%"
                maxW="438px"
              >
                <Entries />
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack
                align="flex-start"
                divider={<StackDivider />}
                w="100%"
                maxW="438px"
              >
                <Comments />
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Context.Provider>
  );
}

export default Scope;
