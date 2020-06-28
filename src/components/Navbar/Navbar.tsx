import React, { useState } from "react";
import scss from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  function isCollapsed() {
    setCollapsed(!collapsed);
    document.body.style.overflow = collapsed ? "hidden" : "auto";
  }
  return (
    <nav className={scss.nav}>
      <div className={scss.nav__body}>
        <div
          className={
            collapsed ? scss.nav__burger : `${scss.nav__burger} ${scss.active}`
          }
          onClick={isCollapsed}
        >
          <span />
        </div>
        <div
          className={
            collapsed ? scss.nav__menu : `${scss.nav__menu} ${scss.active}`
          }
        >
          <div className={scss.nav__item} onClick={isCollapsed}>
            <NavLink to="/pre-junior" activeClassName={scss.activeLink}>
              Pre Junior Page
            </NavLink>
          </div>
          <div className={scss.nav__item} onClick={isCollapsed}>
            <NavLink to="/junior" activeClassName={scss.activeLink}>
              Junior Page
            </NavLink>
          </div>
          <div className={scss.nav__item} onClick={isCollapsed}>
            <NavLink to="/junior-plus" activeClassName={scss.activeLink}>
              Junior+ Page
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
