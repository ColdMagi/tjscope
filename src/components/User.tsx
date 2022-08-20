import { HStack, Avatar, Text } from "@chakra-ui/react";
import { useApiContext } from "contexts/Api";
import { PropsWithChildren } from "react";

interface UserProps {
  name: string;
  avatar_url: string;
  id: number | string;
  size?: "sm" | "md";
}

const sizes = {
  md: {
    fontSize: "18px",
    maxW: "180px",
  },
  sm: {
    fontSize: "13px",
    maxW: "140px",
  },
};

function User({
  name,
  avatar_url,
  id,
  children,
  size = "md",
}: PropsWithChildren<UserProps>) {
  const { host } = useApiContext();
  return (
    <HStack as="a" href={`https://${host}/u/${id}`} target="_blank">
      <Avatar size={{ base: "sm", md: size }} name={name} src={avatar_url} />
      <Text
        fontSize={{ base: "14px", md: sizes[size].fontSize }}
        as="b"
        maxW={{ base: "100px", md: sizes[size].maxW }}
        textOverflow={"ellipsis"}
        overflow="hidden"
        align="initial"
      >
        {name}
      </Text>
      {children}
    </HStack>
  );
}

export default User;
