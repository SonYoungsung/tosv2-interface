import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

/*
************
TEST DEPLOY
AUG 8, 2022
************
*/

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard");
  }, []);

  return (
    <div>
      <Head>
        <title>TOSv2</title>
        <meta title="TOSv2"></meta>
        <meta name="og:type" content="website" />

        <meta name="og:url" content="https://goerli.tosv2.tokamak.network" />
        <meta name="title" content="TOSv2" />
        <meta name="og:title" content="TOSv2" />
        <meta
          name="description"
          content="Functional upgrade to TONStarter ecosystem"
        />
        <meta
          name="og:description"
          content="Functional upgrade to TONStarter ecosystem"
        />
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex></Flex>
    </div>
  );
};

export default Home;
