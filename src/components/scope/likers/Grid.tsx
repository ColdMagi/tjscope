import { chakra, HStack, Text } from "@chakra-ui/react";
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

  const arrLikers = useMemo(
    () =>
      [...Object.values(likers)]
        .filter((l) => l[target])
        .sort((a, b) => (b[target] as number) - (a[target] as number)),
    [likers, target]
  );

  const rowVirtualizer = useVirtualizer({
    count: arrLikers.length,
    getScrollElement: () => ref.current,
    getItemKey: (i) => arrLikers[i].id,
    estimateSize: () => 50,
    overscan: 20,
  });

  return (
    <chakra.div
      shadow="md"
      rounded="md"
      borderWidth="1px"
      borderColor="gray.300"
      ref={ref}
      overflow="auto"
      h="80vh"
      w="100%"
      p="2"
    >
      <chakra.div
        w="100%"
        position="relative"
        height={`${rowVirtualizer.getTotalSize()}px`}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => (
          <div
            key={virtualRow.index}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: `${virtualRow.size}px`,
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            <HStack justifyContent="space-between">
              <User
                avatar_url={arrLikers[virtualRow.index].avatar_url}
                id={arrLikers[virtualRow.index].id}
                name={arrLikers[virtualRow.index].name}
                size="sm"
              />
              <Text color={color}>{arrLikers[virtualRow.index][target]}</Text>
            </HStack>
          </div>
        ))}
      </chakra.div>
    </chakra.div>
  );
}

function TotalGrid({ likers }: TotalGridProps) {
  return (
    <HStack spacing={2}>
      <List likers={likers} target="plus" color="green.300" />
      <List likers={likers} target="minus" color="red.300" />
    </HStack>
  );
}

export default TotalGrid;
