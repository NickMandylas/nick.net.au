import {
  Box,
  Container,
  HStack,
  Link,
  VStack,
  chakra,
  IconButton,
  Divider,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { default as NextImage } from "next/image";
import {
  ImLinkedin2,
  ImSpotify,
  ImMail4,
  ImYoutube,
  ImGithub,
} from "react-icons/im";

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
        </Box>
        <Divider paddingTop={3} />
        <HStack paddingTop={4}>
          <IconButton
            colorScheme="teal"
            variant="outline"
            aria-label="Email"
            icon={<ImMail4 />}
            onClick={() => window.open("mailto:me@nick.net.au", "_blank")}
          />
          <IconButton
            colorScheme="teal"
            variant="outline"
            aria-label="LinkedIn"
            icon={<ImLinkedin2 />}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/nicholas-mandylas/",
                "_blank"
              )
            }
          />
          <IconButton
            colorScheme="teal"
            variant="outline"
            aria-label="Spotify"
            icon={<ImSpotify />}
            onClick={() =>
              window.open("https://open.spotify.com/user/1277355889", "_blank")
            }
          />
          <IconButton
            colorScheme="teal"
            variant="outline"
            aria-label="Youtube"
            icon={<ImYoutube />}
            onClick={() =>
              window.open(
                "https://www.youtube.com/channel/UClEOUz2V0wx-YDB3nfokImA",
                "_blank"
              )
            }
          />
          <IconButton
            colorScheme="teal"
            variant="outline"
            aria-label="Github"
            icon={<ImGithub />}
            onClick={() =>
              window.open("https://github.com/NickMandylas/", "_blank")
            }
          />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Home;
