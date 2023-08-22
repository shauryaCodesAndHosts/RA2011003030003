import React from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";

const LoginPage = ({ onSwitch }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box padding="6" boxShadow="lg" rounded="md" bg="white" width="300px">
        <Heading mb="4">Login</Heading>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email" mb="4" />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password" mb="4" />
        </FormControl>
        <Button colorScheme="teal" width="100%">
          Log In
        </Button>
        <Text mt="4">
          Don't have an account?{" "}
          <Text as="span" color="teal" cursor="pointer" onClick={onSwitch}>
            Sign Up
          </Text>
        </Text>
      </Box>
    </Box>
  );
};

export default LoginPage;
