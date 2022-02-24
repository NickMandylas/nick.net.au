import { Box, Container, HStack, Link, VStack, chakra } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { default as NextImage } from "next/image";

import ProfileImage from "../public/images/nick-profile-pic.jpg";
import AmazonIcon from "../public/icons/amazon-logo.svg";

const Image = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    ["width", "height", "layout", "src", "alt"].includes(prop),
});

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
        <meta name="description" content="Personal space on the web." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack>
        <Image
          src={ProfileImage}
          alt="Picture of Nick Mandylas"
          width={195}
          height={213}
          placeholder="blur"
        />
        <Box textAlign="center">
          <p>
            I&apos;m <b>Nick</b> (/nɪk/).
          </p>
          <HStack justifyContent="center">
            <p>Associate Cloud Architect @ AWS</p>
            <Box paddingTop={1.5}>
              <Image
                src={AmazonIcon}
                height={16}
                width={16}
                alt="Amazon logo"
              />
            </Box>
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
