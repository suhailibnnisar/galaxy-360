import "tailwindcss/tailwind.css";
import SidebarStudentDetail from "./components/navigation/SidebarStudentDetail";

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen flex overflow-hidden bg-white">
      <SidebarStudentDetail />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
