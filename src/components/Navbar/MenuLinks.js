import { Link } from "react-scroll";

const MenuLinks = ({ to, label, setShowMenu, isMobile }) => {
  return (
    <Link
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      offset={isMobile ? -50 : -80}
      duration={isMobile ? 300 : 50}
      className={isMobile ? "listItem" : "desktopMenuListItem"}
      onClick={() => (setShowMenu ? setShowMenu(false) : undefined)}>
      {label}
    </Link>
  );
};

export default MenuLinks;
