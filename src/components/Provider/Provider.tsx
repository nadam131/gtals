import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "../Fonts/Fonts";

import theme from "../../theme";

import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/merriweather";

const Provider = ({ children }: { children: any }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      {children}
    </ChakraProvider>
  );
};

export default Provider;
