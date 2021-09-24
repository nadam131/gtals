import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import Layout from "../components/Layout/Layout";
import Fonts from "../components/Fonts/Fonts";

import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";

import "../components/Paginator/Paginator.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
export default MyApp;
