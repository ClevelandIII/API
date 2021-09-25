import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../util/consts";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const checkSize = () => {
    if (window.innerWidth > 768) {
      setShowLinks(true);
    }
    if (window.innerWidth <= 768) {
      setShowLinks(false);
    }
  };
  useEffect(() => {
    checkSize();
    window.addEventListener("resize", checkSize);
    return window.removeEventListener("resize", checkSize);
  }, []);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <h3 className='logo'>Anime Information Site</h3>
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div className={`links-container ${showLinks && "show"}`}>
          <ul className="links">
            {links
              .filter((link) => link.text !== "Error")
              .map((link) => {
                const { url, id, text } = link;
                return (
                  <li key={id}>
                    <Link to={url}>{text}</Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
