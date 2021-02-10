import "tailwindcss/tailwind.css";
import SidebarStudentDetail from "../components/navigation/SidebarStudentDetail";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  console.log(router);

  return (
    <div>
      {/* <SidebarStudentDetail /> */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
