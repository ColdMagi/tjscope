import { HStack, Avatar, Text } from "@chakra-ui/react";
import { useApiContext } from "contexts/Api";
import { PropsWithChildren } from "react";

interface UserProps {
  name: string;
  avatar_url: string;
  id: number | string;
  size?: "sm" | "md";
}

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
      <Avatar size={size} name={name} src={avatar_url} />
      <Text
        fontSize={size === "md" ? "18px" : "14px"}
        as="b"
        maxW={{ base: "150px", md: "180px", lg: "200px" }}
        textOverflow={"ellipsis"}
        overflow="hidden"
      >
        {name}
      </Text>
      {children}
    </HStack>
  );
}

export default User;
