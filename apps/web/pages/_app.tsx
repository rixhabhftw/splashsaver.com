import { SessionProvider } from "next-auth/react";
import { Inter } from "@next/font/google";
import { AppProps } from "next/app";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <SessionProvider session={session}>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
};

export default MyApp;
