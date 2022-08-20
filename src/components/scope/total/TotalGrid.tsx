import { Box, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useMemo, useRef } from "react";
import type { Osnova } from "types/osnova";

import { useVirtualizer } from "@tanstack/react-virtual";
import User from "components/User";

interface TotalGridProps {
  likers: Osnova.Likers.Likers;
}

interface ListProps extends TotalGridProps {
  target: keyof Osnova.Likers.Liker;
  color: string;
}

function List({ likers, target, color }: ListProps) {
  const ref = useRef<HTMLDivElement>(null);

  const arrLikers = useMemo(() => [...Object.values(likers)], [likers]);

  const rowVirtualizer = useVirtualizer({
    count: arrLikers.length,
    getScrollElement: () => ref.current,
    getItemKey: (i) => arrLikers[i].id,
    estimateSize: () => 35,
  });

  return (
    <Box
      shadow="md"
      rounded="sm"
      p="2"
      borderWidth="1px"
      borderColor="gray.300"
      ref={ref}
      overflow="auto"
      maxH="80vh"
    >
      <VStack
        w="100%"
        position="relative"
        height={`${rowVirtualizer.getTotalSize()}px`}
      >
        {rowVirtualizer.getVirtualItems().map((item) => (
          <HStack
            key={item.key}
            justifyContent={"space-between"}
            position="absolute"
            top="0"
            left="0"
            w="100%"
            height={`${item.size}px`}
            transform={`translateY(${item.start})px`}
          >
            <User
              avatar_url={arrLikers[item.index].avatar_url}
              id={arrLikers[item.index].id}
              name={arrLikers[item.index].name}
            />
            <Text color={color}>{arrLikers[item.index][target]}</Text>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
}

function TotalGrid({ likers }: TotalGridProps) {
  return (
    <SimpleGrid columns={2}>
      <List likers={likers} target="plus" color="green.300" />
      <List likers={likers} target="minus" color="red.300" />
    </SimpleGrid>
  );
}

export default TotalGrid;
