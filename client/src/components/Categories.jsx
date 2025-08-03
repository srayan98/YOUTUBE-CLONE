import React, { useState } from 'react';
import './Categories.css';

const categoryList = [
  "All", "Music", "Gaming", "Live", "News", "Sports", "Movies", "Programming", "Comedy", "Podcasts"
];

const Categories = ({ selected, onSelect }) => {
  return (
    <div className="categories">
      {categoryList.map((cat) => (
        <button
          key={cat}
          className={selected === cat ? "category-btn selected" : "category-btn"}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Categories;
