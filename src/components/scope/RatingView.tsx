import { Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

function RatingView({
  label = "Рейтинг",
  children,
}: PropsWithChildren<{ label?: string }>) {
  return (
    <Stat>
      <StatLabel>{label}</StatLabel>
      <StatNumber color="gray.500">{children}</StatNumber>
    </Stat>
  );
}

export default RatingView;
