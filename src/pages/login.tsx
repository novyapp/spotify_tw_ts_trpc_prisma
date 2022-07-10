import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getProviders, signIn, useSession } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/router";
import Loader from "../components/Loader";

function login({ providers }: any) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.error === "RefreshAccessTokenError") {
      signIn(); // Force sign in to hopefully resolve error
    }
  }, [session]);

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (session) {
    return <Loader />;
  }

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Spotify Redesign</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">
        <Image
          src="https://rb.gy/y9mwtb"
          height={250}
          width={600}
          objectFit="contain"
          className="animate-pulse"
        />
      </Link>
      <div className="relative mt-24 space-y-8 rounded py-10 px-6 md:mt-0 md:max-w-md md:px-14">
        <div className="space-y-4">
          {providers &&
            Object.values(providers).map((provider: any) => (
              <div key={provider.name}>
                <a
                  href={provider.signinUrl}
                  onClick={(e) => e.preventDefault()}
                >
                  <button
                    className="w-full rounded-xl bg-[#16ff60] py-3 font-semibold flex items-center content-center space-x-2 pl-4 pr-4"
                    onClick={(e) => {
                      e.preventDefault();
                      signIn(provider.id, {
                        callbackUrl: `${window.location.origin}/`,
                      });
                    }}
                  >
                    <p>Sign in with {provider.name}</p>
                  </button>
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
