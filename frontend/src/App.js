import React from "react";
import { ChakraProvider, CSSReset, Container } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import DetailedProduct from "./DetailedProduct";

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Router>
        <Header />
        <Container maxW="1200px" mt="8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/DetailedProduct/:id" element={<DetailedProduct />} />
          </Routes>
        </Container>
      </Router>
    </ChakraProvider>
  );
}

export default App;
