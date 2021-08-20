import { Box, Container } from "@chakra-ui/react";
import React from "react";

const styles = {
  wrapper: {
    borderBottom: "1px",
    borderColor: "gray.700",
  },
};

const Header: React.FC = () => {
  return (
    <Box {...styles.wrapper}>
      <Container maxW="container.xxl">Header</Container>
    </Box>
  );
};

export default Header;
