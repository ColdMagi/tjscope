import {
  Avatar,
  Heading,
  HStack,
  Progress,
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
  Text,
  VStack,
} from "@chakra-ui/react";
import BooleanText from "components/atoms/BooleanText";
import RatingView from "components/scope/RatingView";
import { format, isValid } from "date-fns";
import { useApi, useApiLazy } from "hooks/useFetch";
import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import type { Osnova } from "types/osnova";
import { getTargetId } from "utils/common";
import Entries from "modules/Entries";
import Comments from "modules/Comments";
import TotalTable from "components/scope/TotalTable";
import RatingByUser from "components/scope/Stat/RatingByUser";

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
      <SimpleGrid
        columns={{ base: 2, sm: 4 }}
        spacing={3}
        justifyContent="space-between"
        w="100%"
      >
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
        w="100%"
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

//#region Total

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
      spacing={{ base: 5, sm: 8, md: 10 }}
      position="sticky"
      top="0"
      bg="white"
      zIndex="1000"
      pt="5"
      pb="2"
      px={{ base: 2, sm: 3, md: 4 }}
      w="100%"
      justifyContent="center"
    >
      <Avatar
        name={subsite.name}
        size={{ base: "xl", md: "2xl" }}
        src={
          subsite?.avatar?.data?.uuid
            ? `https://leonardo.osnova.io/${subsite?.avatar?.data?.uuid}/-/scale_crop/300x300/-/format/webp/`
            : avatar_url
        }
      />
      <VStack>
        <Heading size={{ base: "md", sm: "lg" }}>{subsite.name}</Heading>
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
    <VStack>
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

      <Tabs
        variant={"soft-rounded"}
        size={{ base: "sm", md: "md" }}
        maxW="100%"
        w="100%"
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
          <Tab>Обзор</Tab>
          <Tab>Посты</Tab>
          <Tab>Комментарии</Tab>
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
            <VStack align="flex-start" divider={<StackDivider />}>
              <Entries data={entries} />
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack align="flex-start" divider={<StackDivider />}>
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
