import { HStack, Avatar, Text } from "@chakra-ui/react";
import { useApiContext } from "contexts/Api";
import { PropsWithChildren } from "react";

interface UserProps {
  name: string;
  avatar_url: string;
  id: number | string;
}

function User({
  name,
  avatar_url,
  id,
  children,
}: PropsWithChildren<UserProps>) {
  const { host } = useApiContext();
  return (
    <HStack as="a" href={`https://${host}/u/${id}`} target="_blank">
      <Avatar size={{ base: "sm", md: "md" }} name={name} src={avatar_url} />
      <Text
        fontSize={{ base: "14px", md: "18px" }}
        as="b"
        maxW={{ base: "100px", md: "180px", lg: "200px" }}
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
