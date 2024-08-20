import "./NavMenu.css";

const NavMenu = (): React.ReactElement => {
  return (
    <nav>
      <ul className="navigation-links">
        <li className="navigation-links__link navigation-links__link--active">
          <a href="/posts">Posts</a>
        </li>
        <li className="navigation-links__link">
          <a href="/create-post">Create post</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
