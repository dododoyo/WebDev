import {navbarPageLinks,socialLinks} from '../data';

function Footer() {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {navbarPageLinks.map((eachLink) => {
          return (
            <li>
              <a href={eachLink.href} className="footer-link">
                {eachLink.text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="footer-icons">
        {socialLinks.map((eachLink) => {
          return (
            <li>
              <a href={eachLink.href} target="_blank" 
              rel='noreferrer' className="footer-icon">
                <i className={eachLink.iconClass}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer

