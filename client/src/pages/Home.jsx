import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Categories from '../components/Categories';
import VideoCard from '../components/VideoCard';
import videos from '../data/videos';

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };


  const filteredVideos = selectedCategory === "All"
    ? videos
    : videos.filter(v => v.title.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div>
      <Header onToggle={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />

      <main
        style={{
          marginLeft: isSidebarOpen ? '200px' : '0',
          transition: 'margin-left 0.3s',
          padding: '20px',
        }}
      >
        <Categories selected={selectedCategory} onSelect={setSelectedCategory} />

        <div className="video-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px"
        }}>
          {filteredVideos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
