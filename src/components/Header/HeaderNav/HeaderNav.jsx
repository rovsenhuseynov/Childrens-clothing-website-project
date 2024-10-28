import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./HeaderNav.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../../reusableСomponents/Logo/Logo";

import nav_search_img from "../../../assets/img/svg/search/search_icon.svg";
import nav_search_active_img from "../../../assets/img/svg/search/activeSearchImg.svg";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import NawDropDownMenu from "./DropDownMenu/NawDropDownMenu";

const HeaderNav = () => {
  const location = useLocation();
  const [isOpen, setOpen] = React.useState(false);
  const [scrollDirection, setScrollDirection] = React.useState("up");
  const [prevScrollPos, setPrevScrollPos] = React.useState(window.scrollY);
  const navRef = React.useRef(null);

  const toggleMenu = () => setOpen((prev) => !prev);

  const handleScroll = React.useCallback(() => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > prevScrollPos) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  React.useEffect(() => {
    if (navRef.current) {
      if (scrollDirection === "down") {
        navRef.current.classList.add("header-nav--hidden");
      } else {
        navRef.current.classList.remove("header-nav--hidden");
      }
    }
  }, [scrollDirection]);

  const navLinks = [
    { to: "/shop", text: "SHOP+" },
    { to: "/ourTeam", text: "OUR TEAM" },
    { to: "/ourImpact", text: "OUR IMPACT" },
    { to: "/giftCard", text: "GIFT CARD" },
    { to: "/faq", text: "FAQ" },
    { to: "/journal", text: "JOURNAL" },
    { to: "/contacts", text: "CONTACTS" },
  ];

  return (
    <div ref={navRef} className="header-nav">
      <div className="header-nav__content">
        <Logo />
        <nav className={`header__nav ${isOpen ? "active" : ""}`}>
          <div className="header__nav-list">
            {navLinks.map(({ to, text }) =>
              to === "/shop" ? (
                <div key={to} className="header__nav-item">
                  <NavLink
                    to={to}
                    className="header__nav-item-link shop-class"
                    onClick={() => setOpen(false)}
                  >
                    {text}
                  </NavLink>
                  <NawDropDownMenu onClose={() => setOpen(false)} />
                </div>
              ) : (
                <NavLink
                  key={to}
                  to={to}
                  className="header__nav-item"
                  onClick={() => setOpen(false)}
                >
                  {text}
                </NavLink>
              )
            )}
          </div>
        </nav>
        <button
          className={`header__menu-btn ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      <div className="header__search">
        <HeaderSearch />
        <NavLink
          to="/search"
          className="header__nav-item"
          onClick={() => setOpen(false)}
        >
          <img
            src={
              location.pathname === "/search"
                ? nav_search_active_img
                : nav_search_img
            }
            alt="search_icon"
            className="nav_search_img"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default HeaderNav;
