import { Outlet, useLocation } from "react-router-dom";
import { useLayoutEffect, useContext } from "react";
import { Store } from "../../App";
import NavBar from "./Navbar.js";
import "../css/MainLayout.css";

function MainLayout() {
  const location = useLocation();
  const { isAuth } = useContext(Store);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="outer-container" id="outer-container">
      <NavBar isAuth={isAuth} />
      <Outlet />
    </div>
  );
}

export default MainLayout;
