import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: any) => {
  return (
    <SessionProvider session={session}>
      <main>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
};

export default MyApp;
