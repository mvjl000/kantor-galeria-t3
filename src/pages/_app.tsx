import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../styles/theme";
import "../styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { trpc } from "../utils/trpc";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/icons/euro.png" />
        <link rel="apple-touch-icon" href="/icons/euro.png" />
        <meta
          name="description"
          content="Kantor Galeria Rzeszów - wymieniaj waluty po atrakcyjnych kursach w świetnej lokalizacji. Zobacz aktualne kursy euro, dolara, funta i ponad 20 innych walut!"
        />
        <title>Kantor Galeria Rzeszów</title>
      </Head>
      <ThemeProvider theme={theme}>
        <UserProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ToastContainer />
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default trpc.withTRPC(MyApp);
