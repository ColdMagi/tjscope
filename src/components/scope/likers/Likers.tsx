import {
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import type { Osnova } from "types/osnova";
import Table from "./Table";
import Grid from "./Grid";

interface Props {
  likers: Osnova.Likers.Likers;
}

function HIcon({ d }: { d: string }) {
  return (
    <Icon
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      fill="none"
      color="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </Icon>
  );
}

function Likers({ likers }: Props) {
  return (
    <Tabs align="end" variant="unstyled" w="100%">
      <TabList>
        <Tab _selected={{ color: "green.300" }} color="gray.300">
          <HIcon d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </Tab>

        <Tab _selected={{ color: "green.300" }} color="gray.300">
          <HIcon d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </Tab>
      </TabList>

      <TabPanels maxW="100vw" overflow={"auto"}>
        <TabPanel px={0}>
          <Table likers={likers} />
        </TabPanel>
        <TabPanel px={0}>
          <Grid likers={likers} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Likers;
