import React, { useState } from "react";
import "./navbar.css";
import menu from "../../assets/menu.png";
import contactImg from "../../assets/contact.png";
import MenuLinks from "./MenuLinks";
import { MENU_DATA } from "../../utils/constants";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  function contactMeOnClickFunction() {
    return () => {
      document.getElementById("contact").scrollIntoView({
        behavior: "smooth",
        offset: -50,
      });
    };
  }

  return (
    <nav className="navbar">
      <div className="deskTopMenu">
        {MENU_DATA.map(
          (item) =>
            item.id !== 5 && (
              <MenuLinks
                key={item.id}
                to={item.to}
                label={item.label}
                isMobile={false}
              />
            )
        )}

      </div>
      <button
        className="desktopMenuButton"
        onClick={contactMeOnClickFunction()}>
        <img src={contactImg} alt="contactImg" className="desktopMenuImg" />
        Contact Me
      </button>

      <img
        src={menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />

      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        {MENU_DATA.map((item) => (
          <MenuLinks
            key={item.id}
            to={item.to}
            label={item.label}
            setShowMenu={setShowMenu}
            isMobile={true}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
