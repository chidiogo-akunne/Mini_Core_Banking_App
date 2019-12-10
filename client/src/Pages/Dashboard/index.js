import React, { useState } from "react";
import SideNav from "../../Components/SideNav/SideNav";
import AnalyticsSummary from "../../Components/AnalyticsSummary/AnalyticsSummary";
import NavHeader from "../../Components/NavHeader/NavHeader";
import { Route, Redirect } from "react-router-dom";
import Openaccount from "../OpenAccount/openaccount";
import CloseAccount from "../Closeaccount/Closeaccount";

export default function Dashboard() {
  const [showToggle, setShowToggle] = useState(false);
  let token = localStorage.getItem("token");
  const handleNavToggle = e => {
    e.preventDefault();
    setShowToggle(!showToggle);
    const sideNav = document.querySelector("#admin-side-nav");
    const mainContent = document.querySelector("#admin-main-page");
    const mobileNav = document.querySelector(".admin-side-nav-menu");
    const navLogo = document.querySelector(".admin-nav-logo");
    const menuItem = document.querySelectorAll(".admin-nav-menu-item li span");
    const menuHeadings = document.querySelectorAll(".admin-nav-menu-item h5");
    if (!showToggle) {
      sideNav.classList.add("admin-shrink-nav");
      mainContent.classList.add("admin-shrink-main");
      mobileNav.classList.add("admin-show-menu");
      navLogo.classList.add("hide");
      menuItem.forEach(item => item.classList.add("hide"));
      menuHeadings.forEach(item => item.classList.add("hide"));
      return;
    }
    sideNav.classList.remove("admin-shrink-nav");
    mainContent.classList.remove("admin-shrink-main");
    mobileNav.classList.remove("admin-show-menu");
    setTimeout(() => {
      navLogo.classList.remove("hide");
      menuItem.forEach(item => item.classList.remove("hide"));
      menuHeadings.forEach(item => item.classList.remove("hide"));
    }, 100);
  };

  if (!token) {
    return <Redirect to="/admin-login" />;
  }

  return (
    <div id="admin-dash-content">
      <SideNav onclick={handleNavToggle}></SideNav>
      <main id="admin-main-page">
        <NavHeader />
        <div className="admin-main-content">
          <Route exact path="/admin" component={AnalyticsSummary}></Route>
          <Route
            exact
            path="/admin/openaccount"
            component={Openaccount}
          ></Route>
          <Route
            exact
            path="/admin/closeaccount"
            component={CloseAccount}
          ></Route>
        </div>
      </main>
    </div>
  );
}
