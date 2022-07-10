import React from "react";
import Body from "./Body";
import Right from "./Right";
import Sidebar from "./Sidebar";
import { spotifyApi } from "../utils/spotify";

function Dashboard() {
  return (
    <main>
      <Sidebar />
      <Body spotifyApi={spotifyApi} />
      <Right />
    </main>
  );
}

export default Dashboard;
