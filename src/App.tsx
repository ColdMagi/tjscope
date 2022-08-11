import { ChakraProvider, Heading, Input } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Start() {
  return (
    <>
      <Input placeholder="https://tjournal.ru/" size="lg" />
    </>
  );
}

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <header>
          <Heading as="h1">TJScope</Heading>
        </header>

        <Routes>
          <Route path="/" element={<Start />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
