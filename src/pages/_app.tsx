import "tailwindcss/tailwind.css";
import { useRouter } from "next/router";
import "../../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    // <div className="h-screen flex overflow-hidden bg-white">
    <>
      <Head>
        <title>Xeromi</title>
      </Head>
      <Component {...pageProps} />
    </>
    // </div>
  );
}

export default MyApp;
