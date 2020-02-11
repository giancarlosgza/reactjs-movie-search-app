import React from "react";

const Header = (props) => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <li className="navbar-brand font-weight-bold">{props.text}</li>
    </header>
  ); 
};

export default Header;