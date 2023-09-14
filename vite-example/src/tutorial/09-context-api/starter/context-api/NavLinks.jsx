import UserContainer from "./UserContainer"
const NavLinks = () => {
  return (
    <div>
      <div className="nav-container">
        <ul className="nav-links">
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
        </ul>
        <UserContainer/>
      </div>
    </div>
  );
}
export default NavLinks