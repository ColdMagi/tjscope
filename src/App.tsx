import { chakra, ChakraProvider, Container, Heading } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <Container my={4}>
        <chakra.header display="flex" alignItems="flex-start">
          <Heading
            as={Link}
            bgGradient="linear(to-l, blue.500, yellow.200)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
            to="/"
          >
            TJScope
          </Heading>
          <chakra.span pl="2" color="gray.400">
            v0.3.8-alpha
          </chakra.span>
        </chakra.header>

        <Outlet />
      </Container>
    </ChakraProvider>
  );
}

export default App;
