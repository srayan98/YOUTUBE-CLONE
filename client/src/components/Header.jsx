import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ toggleSidebar, searchQuery, setSearchQuery }) => {
  return (
    <header className="header">
      <div className="left-section">
        <FaBars className="menu-icon" onClick={toggleSidebar} />
        <Link to="/" className="logo">
          <img
            src="/logo.png" 
            alt="YouTubeClone"
            className="logo-image"
          />
        </Link>
      </div>

      <input
        className="search-input"
        type="text"
        placeholder="Search videos"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <Link to="/signin">
        <button className="signin-btn">Sign In</button>
      </Link>
    </header>
  );
};

export default Header;
