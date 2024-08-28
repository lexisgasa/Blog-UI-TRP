import "./NavMenu.css";
import { NavLink } from "react-router-dom";

const NavMenu = (): React.ReactElement => {
  return (
    <nav className="navigation-links">
      <NavLink
        to={"/posts"}
        className={({ isActive }) =>
          `navigation-links__link ${isActive ? "navigation-links__link--active" : ""}`
        }
      >
        Posts
      </NavLink>
      <NavLink
        to={"/create-post"}
        className={({ isActive }) =>
          `navigation-links__link ${isActive ? "navigation-links__link--active" : ""}`
        }
      >
        Create post
      </NavLink>
    </nav>
  );
};

export default NavMenu;
