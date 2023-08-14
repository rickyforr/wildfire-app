import { WildFires } from "@/components/WildFires/WildFires";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          BC Wildfires
        </title>
        <meta
          name="description"
          content="Information regarding BC Wildfires."
          key="desc"
        />
      </Head>
      <WildFires />
    </>
  );
}
