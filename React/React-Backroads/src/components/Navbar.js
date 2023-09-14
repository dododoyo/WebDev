import theLogo from "../images/logo.svg";
import { navbarPageLinks } from "../data";
import { socialLinks } from "../data";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        
        <div className="nav-header">
          <img src={theLogo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* <!-- left this comment on purpose --> */}

        <ul className="nav-links" id="nav-links">
          {navbarPageLinks.map((eachLink) => {
            return (
              <li>
                <a 
                href={eachLink.href} 
                className="nav-link"
                >
                  {eachLink.text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((eachLink) => {
            return (
              <li>
                <a
                  href={eachLink.href}
                  rel="noreferrer"
                  target="_blank"
                  className="nav-icon"
                >
                  <i className={eachLink.iconClass}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
