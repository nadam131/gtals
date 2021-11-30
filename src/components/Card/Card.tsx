import { Box } from "@chakra-ui/layout";
import React from "react";

const Card = ({ children }: { children: any }) => {
  return (
    <Box
      role={"group"}
      px={7}
      py={10}
      mt={20}
      maxW={["2xs", "sm"]}
      w={"full"}
      bg={"gray.800"}
      boxShadow={"2xl"}
      rounded={"lg"}
      pos={"relative"}
      zIndex={1}
    >
      {children}
    </Box>
  );
};

export default Card;
