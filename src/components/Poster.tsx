import React from "react";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";

function Poster({ track }) {
  return (
    <div
      className="h-[360px] w-[260px] rounded-[50px] 
    overflow-hidden relative text-white/80 cursor-pointer hover:scale-105 hover:text-yellow-100 transition 
    duration-200 ease-out group mx-auto "
    >
      <img
        src={track.albumUrl}
        alt={track.name}
        className="h-full w-full absolute inset-0 object-cover rounded-[50px] opacity-80 group-hover:opacity-100"
      />
      <div
        className="absolute bottom-10 inset-x-0 ml-4 flex 
      items-center space-x-3.5"
      >
        <div
          className="h-10 w-10 bg-green-600 rounded-full flex 
        items-center justify-center group-hover:bg-[#1db954] flex-shrink-0"
        >
          {/* <BsFillPauseFill className="text-white text-xl " /> */}
          <BsFillPlayFill className="text-white text-xl ml-[1px]" />
        </div>
      </div>
    </div>
  );
}

export default Poster;
