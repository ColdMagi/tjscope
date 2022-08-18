import { chakra, ChakraProvider, Container, Heading } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <Container my={4} px="0" maxW={{ base: "100vw", sm: "60ch" }}>
        <chakra.header display="flex" alignItems="flex-start" px="2">
          <Heading
            as={Link}
            bgGradient="linear(to-l, blue.500, yellow.200)"
            bgClip="text"
            fontSize={{ base: "5xl", md: "6xl" }}
            fontWeight="extrabold"
            to="/"
          >
            TJScope
          </Heading>
          <chakra.span pl="2" color="gray.400">
            v0.4-rc0
          </chakra.span>
        </chakra.header>

        <Outlet />
      </Container>
    </ChakraProvider>
  );
}

export default App;
