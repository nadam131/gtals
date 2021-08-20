import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Header from "../Header/Header";

const Layout: React.FC = ({ children }) => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Box flex={1}>{children}</Box>
    </Flex>
  );
};

export default Layout;
