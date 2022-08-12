import { Box, Heading, HStack, Stack, VStack } from "@chakra-ui/react";
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
    <Stack>
      <HStack>
        <VStack>
          <Heading size="lg">{subsite.name}</Heading>
        </VStack>
      </HStack>
    </Stack>
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
