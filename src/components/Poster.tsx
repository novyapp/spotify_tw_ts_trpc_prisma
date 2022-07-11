import React from "react";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { useRecoilState } from "recoil";
import { playingTrackState, playState } from "../atoms/playerAtom";

interface Pos {
  track: any;
  chooseTrack: any;
}

function Poster({ track, chooseTrack }: Pos) {
  const [play, setPlay] = useRecoilState(playState);
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  const handlePlay = () => {
    chooseTrack(track);

    if (track.uri === playingTrack.uri) {
      setPlay(!play);
    }
  };

  return (
    <div
      className="h-[360px] w-full rounded-[50px] 
    overflow-hidden relative text-white/80 cursor-pointer hover:scale-105 transition 
    duration-200 ease-out group mx-auto "
      onClick={handlePlay}
    >
      <img
        src={track.albumUrl}
        alt={track.name}
        className="h-full w-full absolute inset-0 object-cover 
        rounded-[50px] opacity-80 group-hover:opacity-100"
      />
      <div
        className="absolute bottom-10 inset-x-0 ml-4 
        mr-4 p-2 rounded-full bg-black/30 border-white/10 border-2 backdrop-blur-sm flex 
      items-center space-x-3.5 "
      >
        <div
          className="h-10 w-10 bg-green-600 rounded-full flex 
        items-center justify-center group-hover:bg-[#1db954] flex-shrink-0"
        >
          {track.uri === playingTrack.uri && play ? (
            <BsFillPauseFill className="text-white text-xl " />
          ) : (
            <BsFillPlayFill className="text-white text-xl ml-[1px]" />
          )}
        </div>
        <div className="text-[15px]">
          <h4 className="font-extrabold truncate w-44 mb-[-6px]">
            {track.title}
          </h4>
          <h6>{track.artist}</h6>
        </div>
      </div>
    </div>
  );
}

export default Poster;
