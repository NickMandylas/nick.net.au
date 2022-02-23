import { Box, Container, HStack, Link, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import ProfilePic from "../public/nick_pic.jpg";

const Home: NextPage = () => {
  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Head>
        <title>Nick Mandylas</title>
        <meta name="description" content="My personal space on the web." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack>
        <Image
          src={ProfilePic}
          alt="Picture of Nick Mandylas"
          width={195}
          height={213}
          placeholder="blur"
        />
        <Box textAlign="center">
          <p>
            I'm <b>Nick</b> (/nɪk/).
          </p>
          <HStack justifyContent="center">
            <p>Associate Cloud Architect @ AWS</p>
            <img
              src="/amazon-vector.svg"
              style={{ height: 16, marginTop: 2 }}
            />
          </HStack>
          <Link color="teal.500" href="mailto:me@nick.net.au">
            me@nick.net.au
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Home;
