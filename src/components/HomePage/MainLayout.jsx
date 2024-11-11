import { Outlet } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import NavBar from "./NavbarComponent2";
import "../css/MainLayout.css";
import NavBarOld from "./NavbarComponent";

function MainLayout() {
  return (
    <div className="outer-container" id="outer-container">
      <NavBar />
      <Main />
    </div>
  );
}

function Main() {
  useLayoutEffect(() => {
    document
      .getElementById("main-container")
      .scrollTo({ top: 0, left: 0, behavior: "instant" });
  });
  return (
    <div
      className="main-container"
      id="main-container"
      style={{ paddingBottom: "200px" }}
    >
      <Outlet />
    </div>
  );
}
export default MainLayout;
