import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";

import "../components/Paginator/Paginator.css";
import "../components/Post/PostInfo/PostInfo.css";
import "../styles/guttenberg/styles.scss";
import "../styles/style.css";
import "../styles/gta-editor.css";
import "../styles/magnific/magnific-popup.css";

import Script from "next/script";
import Head from "next/head";
import { NextSeo } from "next-seo";
import Provider from "../components/Provider/Provider";

function MyApp({ Component, pageProps }: AppProps) {
  const { meta } = pageProps;
  return (
    <>
      <NextSeo {...meta} />
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.min.css"
          integrity="sha512-bjwk1c6AQQOi6kaFhKNrqoCNLHpq8PT+I42jY/il3r5Ho/Wd+QUT6Pf3WGZa/BwSdRSIjVGBsPtPPo95gt/SLg=="
          crossOrigin="anonymous"
        />
      </Head>
      <Script
        src="/vendor/gta-editor/jquery.min.js"
        strategy="beforeInteractive"
      />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.min.js" />
      <Script src="/vendor/gta-editor/magnific-popup.min.js" />
      <Script src="/vendor/gta-editor/app.js" />
      <Provider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
export default MyApp;
