import React from 'react';

import Button from 'elements/Button';
import BrandIcon from './IconText';

export default function Header(props) {
  const getNavlinkClass = (path) => {
    console.log(path);
    return props.location.pathname === path ? ' active' : '';
  };
  return (
    <header className="spacing-sm">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <BrandIcon />
        <button
          class="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
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
