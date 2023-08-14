import { useUser } from "@auth0/nextjs-auth0/client";
import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  const {user} = useUser()

  useEffect(() => {
    if (user) {
      window.location.href = "/wildfires";
    }
  }, [user]);
  
  return (
    <>
      <Head>
        <title>BC Wildfires</title>
        <meta
          name="description"
          content="Information regarding BC Wildfires."
          key="desc"
        />
      </Head>
      <div className="flex flex-col min-h-screen items-center justify-center">
        <h1 className="text-2xl font-semibold mb-4">
          Login to BC Wildfires App
        </h1>
        <a
          href="/api/auth/login"
          className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40 text-center"
        >
          Login
        </a>
      </div>
    </>
  );
}
