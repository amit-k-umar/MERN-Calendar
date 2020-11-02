import React from "react";
import "../CSS/Home.css";
import CalendarBar from "./CalendarBar";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="layer2">
        <Sidenav id="sidebar"/>
        <CalendarBar />
      </div>
    </div>
  );
}

export default Home;
