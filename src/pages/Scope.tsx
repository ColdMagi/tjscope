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
  VStack,
} from "@chakra-ui/react";
import BooleanText from "components/atoms/BooleanText";
import { format } from "date-fns";
import { useApi } from "hooks/useFetch";
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

  console.log(subsite);

  return (
    <VStack divider={<StackDivider />}>
      <HStack spacing={10}>
        <Avatar
          name={subsite.name}
          size="2xl"
          src={`https://leonardo.osnova.io/${subsite.avatar.data.uuid}/-/scale_crop/300x300/-/format/webp/`}
        />
        <VStack>
          <Heading size="lg">{subsite.name}</Heading>
          <HStack justifyContent={"space-between"} minW="100%">
            <Stat>
              <StatLabel>Рейтинг</StatLabel>
              <StatNumber color="gray.500">{subsite.rating}</StatNumber>
            </Stat>
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

function Scope() {
  const [searchParams] = useSearchParams();
  const id = getTargetId(searchParams.get("id") || "");

  return (
    <Context.Provider value={id}>
      <VStack align="start">
        <Overview />
      </VStack>
    </Context.Provider>
  );
}

export default Scope;
