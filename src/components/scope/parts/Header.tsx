import {
  HStack,
  Avatar,
  VStack,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { isValid, format } from "date-fns";
import type { Osnova } from "types/osnova";
import RatingView from "../RatingView";

function Header({
  subsite,
  avatar_url,
  rating,
}: {
  subsite: Osnova.Subsite.Subsite;
  avatar_url?: string;
  rating?: number;
}) {
  return (
    <HStack
      spacing={{ base: 5, sm: 8, md: 10 }}
      position="sticky"
      top="0"
      bg="white"
      zIndex="1000"
      pt="5"
      pb="2"
      px={{ base: 2, sm: 3, md: 4 }}
      w="100%"
      justifyContent="center"
    >
      <Avatar
        name={subsite.name}
        size={{ base: "xl", md: "2xl" }}
        src={
          subsite?.avatar?.data?.uuid
            ? `https://leonardo.osnova.io/${subsite?.avatar?.data?.uuid}/-/scale_crop/300x300/-/format/webp/`
            : avatar_url
        }
      />
      <VStack>
        <Heading size={{ base: "md", sm: "lg" }}>{subsite.name}</Heading>
        <HStack justifyContent={"space-between"} minW="100%">
          <RatingView>{subsite.rating ?? rating ?? "N/A"}</RatingView>
          <Stat>
            <StatLabel>Создан</StatLabel>
            <StatNumber>
              {isValid(subsite.created)
                ? format(subsite.created * 1000, "dd.LL.yy")
                : "N/A"}
            </StatNumber>
          </Stat>
        </HStack>
      </VStack>
    </HStack>
  );
}

export default Header;
