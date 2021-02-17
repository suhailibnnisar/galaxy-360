import "tailwindcss/tailwind.css";
import { useRouter } from "next/router";
import "../../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    // <div className="h-screen flex overflow-hidden bg-white">
    <Component {...pageProps} />
    // </div>
  );
}

export default MyApp;
