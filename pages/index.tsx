import { Box, HStack, VStack, chakra, Divider, Center } from "@chakra-ui/react";
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
import SocialButton from "../components/SocialButton";

import ProfileImage from "../public/images/nick-profile-pic.jpg";
import AmazonIcon from "../public/icons/amazon-logo.svg";

const Image = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    ["width", "height", "layout", "src", "alt"].includes(prop),
});

const Home: NextPage = () => {
  return (
    <Center height="100vh">
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
            <p>ML Application Engineer @ AWS</p>
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
          <SocialButton
            url="mailto:me@nick.net.au"
            ariaLabel="Email"
            icon={<ImMail4 />}
          />
          <SocialButton
            url="https://www.linkedin.com/in/nicholas-mandylas/"
            ariaLabel="LinkedIn"
            icon={<ImLinkedin2 />}
          />
          <SocialButton
            url="https://open.spotify.com/user/1277355889"
            ariaLabel="Spotify"
            icon={<ImSpotify />}
          />
          <SocialButton
            url="https://www.youtube.com/channel/UClEOUz2V0wx-YDB3nfokImA"
            ariaLabel="Youtube"
            icon={<ImYoutube />}
          />
          <SocialButton
            url="https://github.com/NickMandylas/"
            ariaLabel="Github"
            icon={<ImGithub />}
          />
        </HStack>
      </VStack>
    </Center>
  );
};

export default Home;
