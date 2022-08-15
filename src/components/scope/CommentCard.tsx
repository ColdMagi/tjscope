import { Avatar, Heading, HStack, VStack, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import { Osnova } from "types/osnova";
import { getRating } from "utils/rating";

interface CommentCardProps {
  comment: Osnova.Comment.Comment;
}

function CommentCard({
  comment: {
    author: { avatar_url, name },
    date,
    likes: { count, summ },
    id,
    entry: { url },
    html,
  },
}: CommentCardProps) {
  const { minus, plus } = getRating({ count, summ });
  return (
    <VStack
      align={"flex-start"}
      as="a"
      href={url + `?comment=${id}`}
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
        <Text dangerouslySetInnerHTML={{ __html: html }} />
      </VStack>
      <HStack justifyContent="space-between" minW="100%">
        <span />
        <HStack>
          <Text color="red.300">{minus}</Text>
          <Text color="green.300">{plus}</Text>
        </HStack>
      </HStack>
    </VStack>
  );
}

export default CommentCard;
