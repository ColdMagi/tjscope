import { ChakraProvider, Container, Heading } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <Container my={4}>
        <header className="">
          <Heading
            as="h1"
            bgGradient="linear(to-l, blue.500, yellow.200)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
          >
            TJScope
          </Heading>
        </header>

        <Outlet />
      </Container>
    </ChakraProvider>
  );
}

export default App;
