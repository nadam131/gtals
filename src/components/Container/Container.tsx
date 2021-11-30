import React from "react";
import { Container as CContainer } from "@chakra-ui/react";

const Container = ({ children }: { children: any }) => {
  return (
    <CContainer maxW="container.xxl" px={[2, null, 5, null, 7, 0]}>
      {children}
    </CContainer>
  );
};

export default Container;
