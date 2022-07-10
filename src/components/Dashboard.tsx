import React from "react";
import Body from "./Body";
import Right from "./Right";
import Sidebar from "./Sidebar";
import { spotifyApi } from "../utils/spotify";
import { playingTrackState } from "../atoms/playerAtom";
import { useRecoilState } from "recoil";

function Dashboard() {
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  const chooseTrack = (track: any) => {
    setPlayingTrack(track);
  };

  return (
    <main className="flex min-h-screen min-w-max bg-black lg:pb-24">
      <Sidebar />
      <Body spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
      <Right />
    </main>
  );
}

export default Dashboard;
