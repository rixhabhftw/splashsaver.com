import { Inter } from "@next/font/google";
import { AppProps } from "next/app";
import "react-tippy/dist/tippy.css";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
