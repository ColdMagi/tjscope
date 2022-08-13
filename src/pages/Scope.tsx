import {
  Avatar,
  Heading,
  HStack,
  SimpleGrid,
  StackDivider,
  Stat,
  StatLabel,
  StatNumber,
  Tab,
  Table,
  TableCaption,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import BooleanText from "components/atoms/BooleanText";
import CommentCard from "components/scope/CommentCard";
import EntryCard from "components/scope/EntryCard";
import RatingView from "components/scope/RatingView";
import { format } from "date-fns";
import { useApi, useApiLazy } from "hooks/useFetch";
import { useState } from "react";
import { useEffect } from "react";
import { PropsWithChildren, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Osnova } from "types/osnova";
import { getTargetId } from "utils/common";

function Overview({ subsite }: { subsite: Osnova.Subsite.Subsite }) {
  return (
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
          <StatNumber>{<BooleanText value={subsite.isVerified} />}</StatNumber>
        </Stat>
      </SimpleGrid>
    </VStack>
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

function Entries({ data }: { data: Osnova.Entry.EntriesResponse | undefined }) {
  const stats = useMemo(() => {
    const result = {
      rating: 0,
      ratingCount: 0,
      comments: 0,
      reposts: 0,
      hits: 0,
      mostHits: (data?.result || [])[0],
      mostLiked: (data?.result || [])[0],
      mostDisliked: (data?.result || [])[0],
    };
    for (const entry of data?.result || []) {
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
  }, [data]);

  return (
    <VStack align="flex-start" w="100%" pl="2" spacing={4}>
      <SimpleGrid
        columns={3}
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

function Comments({
  data,
}: {
  data: Osnova.Comment.CommentsResponse | undefined;
}) {
  const stats = useMemo(() => {
    const result = {
      rating: 0,
      ratingCount: 0,
      mostLiked: (data?.result || [])[0],
      mostDisliked: (data?.result || [])[0],
    };
    for (const entry of data?.result || []) {
      result.rating += entry.likes.summ;
      result.ratingCount += entry.likes.count;
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
  }, [data]);

  return (
    <VStack align="flex-start" w="100%" pl="2" spacing={4}>
      <SimpleGrid
        columns={3}
        spacing={1}
        justifyContent="space-between"
        minW="100%"
      >
        <RatingView>{stats.rating}</RatingView>
        <RatingView label="Оценок">{stats.ratingCount}</RatingView>
        <RatingView label="Оценки [минус]">
          {stats.ratingCount - stats.rating}
        </RatingView>
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
  );
}

interface TotalProps {
  comments: Osnova.Comment.CommentsResponse;
}

function Total({ comments }: TotalProps) {
  const [commentsLikers, setCommentsLikers] = useState<
    Record<
      string,
      {
        total: number;
        minus: number;
        plus: number;
        name: string;
        avatar_url: string;
      }
    >
  >({});
  const [commentIndex, setCommentIndex] = useState(0);
  const { data } = useApi<Osnova.Comment.LikersResponse>(
    `/comment/likers/${(comments?.result || [])[commentIndex]?.id}`,
    undefined,
    "1.9"
  );

  useEffect(() => {
    if (!data) return;
    setCommentsLikers((prev) => {
      const result = { ...prev };
      for (const [id, val] of Object.entries(data.result)) {
        if (!Reflect.has(result, id)) {
          result[id] = {
            total: 0,
            minus: 0,
            plus: 0,
            avatar_url: "",
            name: "",
          };
        }
        result[id].total += Math.abs(val.sign);
        result[id].minus += Number(val.sign < 0);
        result[id].plus += Number(val.sign > 0);

        result[id].avatar_url = val.avatar_url;
        result[id].name = val.name;
      }
      return result;
    });
    let timeout = setTimeout(() => setCommentIndex((prev) => prev + 1), 50000);
    return () => clearTimeout(timeout);
  }, [data]);

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Статистика оценок по пользователям</TableCaption>
        <Thead>
          <Tr>
            <Th>Пользователь</Th>
            <Th isNumeric>Плюс</Th>
            <Th isNumeric>Минус</Th>
            <Th isNumeric>Всего</Th>
          </Tr>
        </Thead>
        <Tbody>
          {[...Object.entries(commentsLikers)].map(
            ([id, { name, avatar_url, minus, plus, total }]) => (
              <Tr key={id}>
                <Td>
                  <HStack>
                    <Avatar name={name} src={avatar_url} />
                    <Text
                      as="b"
                      maxW="200px"
                      textOverflow={"ellipsis"}
                      overflow="hidden"
                    >
                      {name}
                    </Text>
                  </HStack>
                </Td>
                <Td>{total}</Td>
                <Td>{minus}</Td>
                <Td>{plus}</Td>
              </Tr>
            )
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

function Header({ subsite }: { subsite: Osnova.Subsite.Subsite }) {
  return (
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
  );
}

function Scope() {
  const [searchParams] = useSearchParams();
  const id = getTargetId(searchParams.get("id") || "");

  const { data } = useApi<Osnova.Subsite.SubsiteResponse>(`/subsite?id=${id}`);
  const entries = useApiLazy<Osnova.Entry.EntriesResponse>(
    `/user/${id}/entries`,
    undefined,
    "1.9"
  );
  const comments = useApiLazy<Osnova.Comment.CommentsResponse>(
    `/user/${id}/comments`,
    undefined,
    "1.9"
  );

  if (!data || !data.result) return null;
  const {
    result: { subsite },
  } = data;

  return (
    <VStack align="start">
      <Header subsite={subsite} />

      <Tabs variant={"enclosed"}>
        <TabList>
          <Tab>Обзор</Tab>
          <Tab>Посты</Tab>
          <Tab>Комментарии</Tab>
          <Tab>Итог</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Overview subsite={subsite} />
          </TabPanel>
          <TabPanel>
            <VStack
              align="flex-start"
              divider={<StackDivider />}
              w="100%"
              maxW="438px"
            >
              <Entries data={entries} />
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack
              align="flex-start"
              divider={<StackDivider />}
              w="100%"
              maxW="438px"
            >
              <Comments data={comments} />
            </VStack>
          </TabPanel>
          <TabPanel>
            <Total comments={comments} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
}

export default Scope;
