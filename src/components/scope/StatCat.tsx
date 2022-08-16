import { VStack, Heading } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

function StatCat({ label, children }: PropsWithChildren<{ label: string }>) {
  return (
    <VStack align="flex-start" minW="100%">
      <Heading size="md">{label}</Heading>
      {children}
    </VStack>
  );
}

export default StatCat;
