import * as React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
