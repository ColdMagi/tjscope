import {
  Avatar,
  Box,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { Osnova } from "types/osnova";
import { getRating } from "utils/rating";

interface EntryCardProps {
  entry: Osnova.Entry.Entry;
}

function Tweet({ data: { markdown } }: Osnova.Entry.Block) {
  return (
    <Box p="3" rounded="lg" borderColor="gray.300" borderWidth="1px">
      {markdown}
    </Box>
  );
}

function EntryCard({
  entry: {
    url,
    hitsCount,
    intro,
    date,
    likes: { count, summ },
    cover,
    subsite: { avatar_url, name },
    title,
    blocks,
    ...entry
  },
}: EntryCardProps) {
  const { minus, plus } = getRating({ count, summ });
  return (
    <VStack
      align={"flex-start"}
      as="a"
      href={url}
      rel="nofollow noopener noreferrer"
      target="_blank"
      p="3"
      shadow="md"
      borderWidth="1px"
      rounded="md"
      minW="100%"
      spacing={3}
    >
      <HStack justifyContent={"space-between"} minW="100%">
        <HStack>
          <Avatar size="xs" src={avatar_url} name={name} />
          <Heading size="sm">{name}</Heading>
        </HStack>
        <Text color="gray.400" as="time">
          {format(date * 1000, "dd.LL.yy")}
        </Text>
      </HStack>
      <VStack pl="8">
        {title && <Heading size="sm">{title}</Heading>}
        <Text>{intro}</Text>
        {cover && (
          <Image
            src={cover.thumbnailUrl}
            alt=""
            objectFit={"contain"}
            pointerEvents={"none"}
          />
        )}
        {blocks && blocks[0] && blocks[0].type === "tweet" && (
          <Tweet {...blocks[0]} />
        )}
      </VStack>
      <HStack justifyContent="space-between" minW="100%">
        <Text pl="8" color="gray.400">
          {hitsCount} просмотров
        </Text>
        <HStack>
          <Text color="red.300">{minus}</Text>
          <Text color="green.300">{plus}</Text>
        </HStack>
      </HStack>
    </VStack>
  );
}

export default EntryCard;
