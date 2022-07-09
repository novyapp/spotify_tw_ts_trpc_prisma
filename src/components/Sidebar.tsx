import React from "react";
import Image from "next/image";
import {
  HiHome,
  HiStar,
  HiMicrophone,
  HiChartBar,
  HiClock,
  HiDotsHorizontal,
} from "react-icons/hi";

function Sidebar() {
  return (
    <section className="fixed top-0 z-40 flex flex-col p-4 items-center bg-black w-[90px] h-screen space-y-8 ">
      <Image
        src="https://rb.gy/xkacau"
        width={56}
        height={56}
        objectFit="contain"
      />
      <div>
        <HiHome className="sidebarIcon text-white opacity-[0.85]" />
        <HiStar className="sidebarIcon text-2xl" />
        <HiMicrophone className="sidebarIcon ml-1" />
        <HiChartBar className="sidebarIcon" />
        <HiClock className="sidebarIcon" />
        <HiDotsHorizontal className="sidebarIcon" />
      </div>
    </section>
  );
}

export default Sidebar;
