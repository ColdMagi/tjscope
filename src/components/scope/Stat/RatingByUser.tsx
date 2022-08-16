import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  HStack,
  Text,
} from "@chakra-ui/react";
import User from "components/User";
import { type ReactNode } from "react";
import type { Osnova } from "types/osnova";

type Rating = Pick<Osnova.Likers.Liker, "plus" | "minus">;

interface ShowRatingProps extends Rating {}

function ShowRating({ plus, minus }: ShowRatingProps) {
  return (
    <HStack spacing={2}>
      <Text fontSize="16px" as="span" color="green.300">
        {plus}
      </Text>
      <Text fontSize="16px" as="span" color="red.300">
        {minus}
      </Text>
      <Text fontSize="16px" as="span" color="gray.500">
        {plus + minus ?? "N/A"}
      </Text>
    </HStack>
  );
}

export interface RatingByUserProps extends Rating {
  label: ReactNode;
  name: string;
  avatar_url: string;
  id: string;
}

function RatingByUser({
  label,
  name,
  avatar_url,
  id,
  ...rating
}: RatingByUserProps) {
  return (
    <Stat>
      <StatLabel>{label}</StatLabel>
      <StatNumber>
        <User name={name} avatar_url={avatar_url} id={id} />
      </StatNumber>
      <StatHelpText pl="14">
        <ShowRating {...rating} />
      </StatHelpText>
    </Stat>
  );
}

export default RatingByUser;
