import {
  VStack,
  Progress,
  SimpleGrid,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  HStack,
} from "@chakra-ui/react";
import RatingByUser from "components/scope/Stat/RatingByUser";
import Likers from "components/scope/likers/Likers";
import { addMilliseconds, formatDistance } from "date-fns";
import useLikers, { UseLikersIdSource } from "hooks/useLikers";

interface RatingProps {
  source: UseLikersIdSource;
}

function Rating({ source }: RatingProps) {
  const { loading, loaded, size, data, stats, timeoutTime } = useLikers(
    source,
    "comment"
  );

  return (
    <VStack position="relative" w="100%">
      {loading && (
        <VStack w="100%" align="flex-end">
          <Progress
            size="lg"
            value={(loaded / size || 1) * 100}
            w="100%"
            rounded="md"
          />
          <HStack spacing={2}>
            <Text>Осталось:</Text>
            <Text>
              {formatDistance(
                new Date(),
                addMilliseconds(new Date(), timeoutTime * (size - loaded)),
                { includeSeconds: true }
              )}
            </Text>
          </HStack>
        </VStack>
      )}

      {!loading && (
        <>
          <SimpleGrid
            columns={{ md: 2, base: 1 }}
            spacing={5}
            justifyContent="space-between"
            minW="100%"
          >
            {!![...Object.entries(data)].length && (
              <Stat>
                <StatLabel>Уникальных пользователей</StatLabel>
                <StatNumber>{[...Object.entries(data)].length}</StatNumber>
              </Stat>
            )}
            {!!+stats.plus.id && (
              <RatingByUser {...stats.plus} label="Больше всего плюсов" />
            )}
            {!!+stats.minus.id && (
              <RatingByUser {...stats.minus} label="Больше всего минусов" />
            )}
            {!!+stats.total.id && (
              <RatingByUser {...stats.total} label="Больше всего оценок" />
            )}
          </SimpleGrid>
          <Likers likers={data} />
        </>
      )}
    </VStack>
  );
}

export default Rating;
