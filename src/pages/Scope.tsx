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
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { getTargetId } from "utils/common";
import Entries from "modules/Entries";
import Comments from "modules/Comments";
import Total from "modules/Total";
import Overview from "modules/Overview";
import Header from "components/scope/parts/Header";
import useScope from "hooks/useScope";

function Scope() {
  const [searchParams] = useSearchParams();
  const id = getTargetId(searchParams.get("id") || "");

  const { subsite, subsiteError, entries, comments } = useScope(id);

  const entriesRating = useMemo(
    () => entries?.result?.reduce((p, c) => p + c.likes.summ, 0),
    [entries]
  );
  const commentsRating = useMemo(
    () => comments?.result?.reduce((p, c) => p + c.likes.summ, 0),
    [comments]
  );

  return (
    <VStack>
      {subsiteError && (
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
          subsite?.avatar?.data?.url ||
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
