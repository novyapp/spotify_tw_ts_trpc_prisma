import React, { useEffect, useState } from "react";
import Body from "./Body";
import Right from "./Right";
import Sidebar from "./Sidebar";
import { spotifyApi } from "../utils/spotify";
import { playingTrackState } from "../atoms/playerAtom";
import { useRecoilState } from "recoil";
import { useSession } from "next-auth/react";
import Player from "./Player";

function Dashboard() {
  const { data: session } = useSession();
  const accessToken = session?.accessToken;
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    setShowPlayer(true);
  }, []);

  const chooseTrack = (track: any) => {
    setPlayingTrack(track);
  };

  return (
    <main className="flex min-h-screen min-w-max bg-black lg:pb-24">
      <Sidebar />
      <Body spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
      <Right spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
      <div className="fixed bottom-0 left-0 z-50 w-full">
        <Player accessToken={accessToken} trackUri={playingTrack.uri} />
      </div>
    </main>
  );
}

export default Dashboard;
