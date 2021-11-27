import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "../Fonts/Fonts";

import theme from "../../theme";

import "@fontsource/raleway/300.css";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/600.css";
import "@fontsource/raleway/700.css";
import "@fontsource/raleway/800.css";

import "@fontsource/merriweather";
import "@fontsource/merriweather-sans";

const Provider = ({ children }: { children: any }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      {children}
    </ChakraProvider>
  );
};

export default Provider;
