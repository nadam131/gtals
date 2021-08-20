import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";

import theme from "../theme";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
export default MyApp;
