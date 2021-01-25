import 'tailwindcss/tailwind.css';
import SidebarStudentDetail from '../components/navigation/SidebarStudentDetail';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  console.log(router);

  return (
    <div className="h-screen flex overflow-hidden bg-white">
      {/* <SidebarStudentDetail /> */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
