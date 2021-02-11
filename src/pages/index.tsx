import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import MainLayout from "../layouts/MainLayout";
import { route } from "next/dist/next-server/server/router";

export default function Home() {
  const history = useRouter();
  const [settingUp, setSettingUp] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("authenticated")) {
      history.push("/auth/signin");
    }

    localStorage.setItem("authenticated", "yes");
    setSettingUp(false);
  }, []);

  if (settingUp) return <></>;
  return <MainLayout>Dashboard</MainLayout>;
}
