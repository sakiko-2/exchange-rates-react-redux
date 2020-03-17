import React from 'react';
import { Globe }from 'react-feather';
import headerStyles from './Header.module.css';

const Header = () => (
  <nav className={`navbar, ${headerStyles.navbar}`}>
    <div className="navbar-brand">
      <Globe className={headerStyles.logo} size={48}/>
    </div>
  </nav>
);

export default Header;
