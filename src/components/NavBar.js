import React from 'react';

const NavBar = () => {
  const links = ["Home", "About", "Projects"];

  return (
    <div>
      {links.map((link, index) => (
        <a key={index} href={`#${link.toLowerCase()}`}>
          {link.toLowerCase()}
        </a>
      ))}
    </div>
  );
}

export default NavBar;
