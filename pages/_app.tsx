import "../styles/globals.css";
import "../styles/universe.sass";
import type { AppProps } from "next/app";
import Universe from "../components/common/Universe";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Universe />
      <Component {...pageProps} />
    </>
  );
}
