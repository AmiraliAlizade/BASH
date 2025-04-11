import React from "react";
import Navbar from "../components/navbar/Navbar";
import Houses from "../components/houses/Houses";
import Sidebar from "../components/sidebar/Sidebar";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <Houses></Houses>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}
