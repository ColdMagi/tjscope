import {
  Button,
  ChakraProvider,
  Container,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Scope = lazy(() => import("./pages/Scope"));

function Start() {
  return (
    <InputGroup mt="4" size="lg">
      <Input pr="6.2rem" placeholder="https://tjournal.ru/" size="lg" />
      <InputRightElement width="6rem">
        <Button h="2.5rem" size="sm">
          Scooope
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
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

          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/scope" element={<Scope />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
