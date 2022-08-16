import {
  Heading,
  StackDivider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useApi, useApiLazy } from "hooks/useFetch";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import type { Osnova } from "types/osnova";
import { getTargetId } from "utils/common";
import Entries from "modules/Entries";
import Comments from "modules/Comments";
import Total from "modules/Total";
import Overview from "modules/Overview";
import Header from "components/scope/parts/Header";

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
