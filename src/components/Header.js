import React, { useState } from "react";
import moon from "../images/icon-moon.svg";
import sun from "../images/icon-sun.svg";

const Header = () => {
  const [icon, setIcon] = useState(sun);

  const handleIconClick = () => {
    if (icon === moon) {
      setIcon(sun);
      document.body.setAttribute("data-theme", "dark");
    } else {
      setIcon(moon);
      document.body.setAttribute("data-theme", "light");
    }
  };

  return (
    <div className="header">
      <h1>TODO</h1>
      <button className="theme-icon">
        <img src={icon} alt="theme icon" onClick={handleIconClick} />
      </button>
    </div>
  );
};

export default Header;
