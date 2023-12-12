import React from 'react';
import './index.css';

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <p className="website-logo">TEJA</p>
      <ul className="nav-menu">
        <li>
          <a
            href="https://www.linkedin.com/in/teja-gulagani-0a1338274/"
            target="_blank" // opens the link in a new tab
            rel="noopener noreferrer"
          >
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-linkedin-img.png"
              alt="LinkedIn"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/tejababu846"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-github-img.png"
              alt="GitHub"
            />
          </a>
        </li>
        <li>
          <img
            className="social-network-img"
            src="https://assets.ccbp.in/frontend/react-js/projects-twitter-img.png"
            alt="Twitter"
          />
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;