import { WildFires } from "@/components/WildFires/WildFires";
import Head from "next/head";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";

export default withPageAuthRequired(function Home() {
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
      <WildFires />
    </>
  );
});
