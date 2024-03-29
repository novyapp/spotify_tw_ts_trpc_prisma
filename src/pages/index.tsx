import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Dashboard from "../components/Dashboard";
import { useRouter } from "next/router";
import Loader from "../components/Loader";

const Home: NextPage = () => {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login");
    },
  });
  if (status === "loading") {
    return <Loader />;
  }
  return (
    <>
      <Head>
        <title>Spome - Music Player</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Dashboard />
    </>
  );
};

export default Home;
