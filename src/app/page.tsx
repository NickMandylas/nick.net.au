"use client";

import Gravity, { MatterBody } from "@/components/gravity";

export default function Preview() {
  return (
    <div className="w-full h-full flex flex-col relative font-azeretMono">
      <div className="pt-20 text-6xl sm:text-7xl md:text-8xl text-black w-full text-center font-calendas italic">
        nick mandylas
      </div>
      <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="30%"
          y="10%"
        >
          <a
            href="mailto:me@nick.net.au"
            className="text-xl sm:text-2xl md:text-3xl bg-[#0015ff] text-white rounded-full hover:cursor-pointer px-8 py-4 block"
          >
            email
          </a>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="30%"
          y="30%"
        >
          <a
            href="https://www.linkedin.com/in/nicholas-mandylas/"
            className="text-xl sm:text-2xl md:text-3xl bg-[#E794DA] text-white rounded-full hover:cursor-grab px-8 py-4 block"
          >
            linkedin
          </a>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="40%"
          y="20%"
          angle={10}
        >
          <a
            href="https://open.spotify.com/user/1277355889"
            className="text-xl sm:text-2xl md:text-3xl bg-[#1f464d] text-white rounded-full hover:cursor-grab px-8 py-4 block"
          >
            spotify
          </a>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="75%"
          y="10%"
        >
          <a
            href="https://www.youtube.com/channel/UClEOUz2V0wx-YDB3nfokImA"
            className="text-xl sm:text-2xl md:text-3xl bg-[#ff5941] text-white rounded-full hover:cursor-grab px-8 py-4 block"
          >
            youtube
          </a>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="80%"
          y="20%"
        >
          <a
            href="https://github.com/NickMandylas/"
            className="text-xl sm:text-2xl md:text-3xl bg-orange-500 text-white rounded-full hover:cursor-grab px-8 py-4 block"
          >
            github
          </a>
        </MatterBody>
      </Gravity>
    </div>
  );
}
