import {
  VStack,
  StackDivider,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import BooleanText from "components/atoms/BooleanText";
import type { Osnova } from "types/osnova";

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

export default Overview;
