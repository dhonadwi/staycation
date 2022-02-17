import React from 'react';

import Button from 'elements/Button';
import BrandIcon from './IconText';

export default function Header(props) {
  const getNavlinkClass = (path) => {
    return props.location.pathname === path ? ' active' : '';
  };
  return (
    <header className="spacing-sm">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <BrandIcon />
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item${getNavlinkClass('/')}`}>
              <Button className="nav-link" type="link" href="">
                Home
              </Button>
            </li>
            <li className={`nav-item${getNavlinkClass('/browse-by')}`}>
              <Button className="nav-link" type="link" href="/browse-by">
                Browse By
              </Button>
            </li>
            <li className={`nav-item${getNavlinkClass('/stories')}`}>
              <Button className="nav-link" type="link" href="/stories">
                Stories
              </Button>
            </li>
            <li className={`nav-item${getNavlinkClass('/agents')}`}>
              <Button className="nav-link" type="link" href="/agents">
                Agents
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
