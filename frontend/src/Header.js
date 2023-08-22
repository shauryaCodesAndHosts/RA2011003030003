import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { HiHome, HiUserCircle } from "react-icons/hi";

const Header = () => {
  return (
    <Box bg="teal.500" color="white" py="4">
      <Flex maxW="1200px" mx="auto" justify="space-between" align="center">
        <Text fontSize="xl" fontWeight="bold">
          Shaurya
        </Text>
        <Flex>
          <IconButton
            as={RouterLink}
            to="/"
            colorScheme="teal"
            variant="ghost"
            aria-label="Home"
            icon={<HiHome />}
            mr="4"
          />
          <IconButton
            as={RouterLink}
            to="/login" // Replace with your login/signup route
            colorScheme="teal"
            variant="ghost"
            aria-label="Login/Signup"
            icon={<HiUserCircle />}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
