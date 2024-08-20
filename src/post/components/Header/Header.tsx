import NavMenu from "../NavMenu/NavMenu";
import "./Header.css";

const Header = (): React.ReactElement => {
  return (
    <header className="main-header">
      <h1 className="main-title">Blog-TRP</h1>
      <NavMenu />
    </header>
  );
};

export default Header;
