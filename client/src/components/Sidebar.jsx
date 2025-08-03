import React from 'react';
import './Sidebar.css';
import { FaHome, FaFire, FaMusic, FaGamepad, FaFilm } from 'react-icons/fa';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-link"><FaHome /> Home</div>
      <div className="sidebar-link"><FaFire /> Trending</div>
      <div className="sidebar-link"><FaMusic /> Music</div>
      <div className="sidebar-link"><FaGamepad /> Gaming</div>
      <div className="sidebar-link"><FaFilm /> Movies</div>
    </div>
  );
};

export default Sidebar;
