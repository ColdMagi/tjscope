import {
  Avatar,
  Heading,
  HStack,
  Progress,
  SimpleGrid,
  StackDivider,
  Stat,
  StatHelpText,
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
  useConst,
  VStack,
} from "@chakra-ui/react";
import BooleanText from "components/atoms/BooleanText";
import CommentCard from "components/scope/CommentCard";
import EntryCard from "components/scope/EntryCard";
import RatingView from "components/scope/RatingView";
import { format, isValid } from "date-fns";
import { useApi, useApiLazy } from "hooks/useFetch";
import { useState } from "react";
import { useEffect } from "react";
import { PropsWithChildren, useMemo } from "react";
import { Bar, Radar } from "react-chartjs-2";
import { useSearchParams } from "react-router-dom";
import { Osnova } from "types/osnova";
import { getMonths, getTargetId } from "utils/common";

import {
  ChartData,
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  BarElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  BarElement,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

function Overview({
  subsite,
  entries,
  comments,
}: {
  subsite: Osnova.Subsite.Subsite;
  entries?: number;
  comments?: number;
}) {
  return (
    <VStack divider={<StackDivider />}>
      <SimpleGrid columns={4} spacing={3}>
        <Stat>
          <StatLabel>Постов</StatLabel>
          <StatNumber>
            {subsite?.counters?.entries ?? entries ?? "N/A"}
          </StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Комментариев</StatLabel>
          <StatNumber>
            {subsite?.counters?.comments ?? comments ?? "N/A"}
          </StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Подписок</StatLabel>
          <StatNumber>{subsite?.counters?.subscriptions ?? "N/A"}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Подписчиков</StatLabel>
          <StatNumber>{subsite?.counters?.subscribers ?? "N/A"}</StatNumber>
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
          <StatNumber>{<BooleanText value={subsite?.isPlus} />}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Подтвержден</StatLabel>
          <StatNumber>{<BooleanText value={subsite?.isVerified} />}</StatNumber>
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

//#region Activity

interface ActivityProps {
  comments: Osnova.Comment.CommentsResponse;
}

function Activity({ comments }: ActivityProps) {
  const options = useConst({ plugins: { legend: { display: false } } });
  const commentDatasetOptions = useConst({
    borderColor: "rgb(49,130,206)",
    backgroundColor: "rgba(49,130,206,0.4)",
    borderWidth: 1,
  });
  const getStats = useConst(
    () =>
      function getStats<T extends { result?: Array<{ date: number }> }>(
        target: T,
        dsOpts = {}
      ) {
        const d = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
        const dd = { ...d, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0 };
        const stats: {
          years: Record<string, number>;
          months: Record<string, number>;
          days: Record<string, number>;
          hours: Record<string, number>;
        } = {
          years: {},
          months: {
            ...dd,
          },
          days: { ...d },
          hours: {
            ...d,
            12: 0,
            13: 0,
            14: 0,
            15: 0,
            16: 0,
            17: 0,
            18: 0,
            19: 0,
            20: 0,
            21: 0,
            22: 0,
            23: 0,
          },
        };
        for (const el of target?.result || []) {
          const dt = new Date(el.date * 1000);
          const year = dt.getUTCFullYear();
          const month = dt.getUTCMonth();
          const day = dt.getDay();
          const hour = dt.getUTCHours();
          stats.years[year] = (stats.years[year] || 0) + 1;
          stats.months[month] = (stats.months[month] || 0) + 1;
          stats.days[day] = (stats.days[day] || 0) + 1;
          stats.hours[hour] = (stats.hours[hour] || 0) + 1;
        }
        return {
          years: {
            datasets: [
              {
                data: [...Object.values(stats.years)],
                ...dsOpts,
              },
            ],
            labels: [...Object.keys(stats.years)],
          },
          months: {
            datasets: [{ data: [...Object.values(stats.months)], ...dsOpts }],
            labels: [...getMonths()],
          },
          days: {
            datasets: [{ data: [...Object.values(stats.days)], ...dsOpts }],
            labels: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
          },
          hours: {
            datasets: [{ data: [...Object.values(stats.hours)], ...dsOpts }],
            labels: [...Object.keys(stats.hours)],
          },
        } as {
          years: ChartData<"bar", number[], string>;
          months: ChartData<"bar", number[], string>;
          days: ChartData<"bar", number[], string>;
          hours: ChartData<"radar", number[], string>;
        };
      }
  );

  const commentsStats = useMemo(() => {
    return getStats(comments, commentDatasetOptions);
  }, [comments, commentDatasetOptions, getStats]);

  return (
    <Tabs w="100%">
      <TabList w="100%">
        <Tab>Комментарии</Tab>
      </TabList>
      <TabPanels w="100%">
        <TabPanel w="100%">
          <VStack w="100%">
            <Heading size="md">По годам</Heading>
            <Bar data={commentsStats.years} options={options} />
          </VStack>
          <VStack w="100%">
            <Heading size="md">По месяцам</Heading>
            <Bar data={commentsStats.months} options={options} />
          </VStack>
          <VStack w="100%">
            <Heading size="md">По дням</Heading>
            <Bar data={commentsStats.days} options={options} />
          </VStack>
          <VStack w="100%">
            <Heading size="md">По часам</Heading>
            <Radar data={commentsStats.hours} options={options} />
          </VStack>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

//#endregion

//#region Total

interface TotalProps {
  comments: Osnova.Comment.CommentsResponse;
}

function ShowRatingPlusMinus({
  source: { plus, minus },
}: {
  source: { plus: number; minus: number };
}) {
  return (
    <HStack spacing={2}>
      <Text fontSize="16px" as="span" color="green.300">
        {plus}
      </Text>
      <Text fontSize="16px" as="span" color="red.300">
        {minus}
      </Text>
      <Text fontSize="16px" as="span" color="gray.500">
        {plus + minus ?? "N/A"}
      </Text>
    </HStack>
  );
}

interface UserProps {
  name: string;
  avatar_url: string;
  id: number | string;
  size?: "sm" | "md";
}

function User({
  name,
  avatar_url,
  id,
  children,
  size = "md",
}: PropsWithChildren<UserProps>) {
  return (
    <HStack as="a" href={`https://tjournal.ru/u/${id}`} target="_blank">
      <Avatar size={size} name={name} src={avatar_url} />
      <Text
        fontSize={size === "md" ? "18px" : "14px"}
        as="b"
        maxW={{ base: "150px", md: "180px", lg: "200px" }}
        textOverflow={"ellipsis"}
        overflow="hidden"
      >
        {name}
      </Text>
      {children}
    </HStack>
  );
}

type Liker = { minus: number; plus: number; name: string; avatar_url: string };
type Likers = Record<string, Liker>;

function TotalTable({ likers }: { likers: Likers }) {
  return (
    <TableContainer>
      <Table variant="simple" size={{ base: "sm", md: "md", lg: "lg" }}>
        <TableCaption>Статистика оценок по пользователям</TableCaption>
        <Thead>
          <Tr>
            <Th>Пользователь</Th>
            <Th isNumeric color="green.300">
              +
            </Th>
            <Th isNumeric color="red.300">
              -
            </Th>
            <Th isNumeric>Всего</Th>
          </Tr>
        </Thead>
        <Tbody>
          {[...Object.entries(likers)]
            .sort(([_, a], [_0, b]) => b.plus + b.minus - (a.plus + a.minus))
            .map(([id, { name, avatar_url, minus, plus }]) => (
              <Tr key={id}>
                <Td>
                  <User name={name} avatar_url={avatar_url} id={id} />
                </Td>
                <Td>{plus}</Td>
                <Td>{minus}</Td>
                <Td>{minus + plus}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

function Total({ comments }: TotalProps) {
  const [commentsLikers, setCommentsLikers] = useState<Likers>({});
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
          <Stat>
            <StatLabel>Больше всего плюсов</StatLabel>
            <StatNumber>
              <User
                name={commentStats.plus.name}
                avatar_url={commentStats.plus.avatar_url}
                id={commentStats.plus.id}
              />
            </StatNumber>
            <StatHelpText pl="14">
              <ShowRatingPlusMinus source={commentStats.plus} />
            </StatHelpText>
          </Stat>
        )}
        {!!+commentStats.minus.id && (
          <Stat>
            <StatLabel>Больше всего минусов</StatLabel>
            <StatNumber>
              <User
                name={commentStats.minus.name}
                avatar_url={commentStats.minus.avatar_url}
                id={commentStats.minus.id}
              />
            </StatNumber>
            <StatHelpText pl="14">
              <ShowRatingPlusMinus source={commentStats.minus} />
            </StatHelpText>
          </Stat>
        )}
        {!!+commentStats.total.id && (
          <Stat>
            <StatLabel>Больше всего оценок</StatLabel>
            <StatNumber>
              <User
                name={commentStats.total.name}
                avatar_url={commentStats.total.avatar_url}
                id={commentStats.total.id}
              />
            </StatNumber>
            <StatHelpText pl="14">
              <ShowRatingPlusMinus source={commentStats.total} />
            </StatHelpText>
          </Stat>
        )}
      </SimpleGrid>

      {comments?.result?.length <= commentIndex && (
        <TotalTable likers={commentsLikers} />
      )}
    </VStack>
  );
}

//#endregion

function Header({
  subsite,
  avatar_url,
  rating,
}: {
  subsite: Osnova.Subsite.Subsite;
  avatar_url?: string;
  rating?: number;
}) {
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
        src={
          subsite?.avatar?.data?.uuid
            ? `https://leonardo.osnova.io/${subsite?.avatar?.data?.uuid}/-/scale_crop/300x300/-/format/webp/`
            : avatar_url
        }
      />
      <VStack>
        <Heading size="lg">{subsite.name}</Heading>
        <HStack justifyContent={"space-between"} minW="100%">
          <RatingView>{subsite.rating ?? rating ?? "N/A"}</RatingView>
          <Stat>
            <StatLabel>Создан</StatLabel>
            <StatNumber>
              {isValid(subsite.created)
                ? format(subsite.created * 1000, "dd.LL.yy")
                : "N/A"}
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

  const { data, error } = useApi<Osnova.Subsite.SubsiteResponse>(
    `/subsite?id=${id}`
  );
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

  const entriesRating = useMemo(
    () => entries?.result?.reduce((p, c) => p + c.likes.summ, 0),
    [entries]
  );
  const commentsRating = useMemo(
    () => comments?.result?.reduce((p, c) => p + c.likes.summ, 0),
    [comments]
  );

  const {
    result: { subsite },
  } = data || {
    result: {
      subsite: {
        name:
          comments?.result?.at(0)?.author?.name ||
          entries?.result?.at(0)?.author?.name,
      } as any,
    },
  };

  return (
    <VStack align="start">
      {error && (
        <VStack align="start">
          <Heading>
            Вероятно профиль закрыт{" "}
            {!(comments?.result?.length || entries?.result?.length) && (
              <>или не существует</>
            )}
          </Heading>
          <Text fontSize="12px" color="gray.500">
            Некоторые данные могут быть менее точны и потребуется дополнительное
            время для подсчета
          </Text>
        </VStack>
      )}
      <Header
        subsite={subsite}
        avatar_url={
          comments?.result?.at(0)?.author?.avatar_url ||
          entries?.result?.at(0)?.author?.avatar_url
        }
        rating={entriesRating + commentsRating}
      />

      <Tabs variant={"enclosed"}>
        <TabList>
          <Tab>Обзор</Tab>
          <Tab>Посты</Tab>
          <Tab>Комментарии</Tab>
          <Tab>Активность</Tab>
          <Tab>Итог</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Overview
              subsite={subsite}
              entries={entries?.result?.length}
              comments={comments?.result?.length}
            />
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
          <TabPanel w="100%" maxW="438px">
            <Activity comments={comments} />
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
