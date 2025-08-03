import React from 'react';
import './Watch.css';

const Watch = () => {
  return (
    <div className="watch-container">
      {/* Main video player */}
      <div className="video-player">
        <iframe
          width="100%"
          height="500px"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Sample Video"
          allowFullScreen
        ></iframe>
      </div>

      {/* Video details */}
      <div className="video-info">
        <h2>Sample Video Title</h2>
        <div className="video-stats">
          <span>1,234,567 views • Jul 31, 2025</span>
          <div className="video-actions">
            <button>👍 10K</button>
            <button>👎</button>
            <button>🔗 Share</button>
          </div>
        </div>
      </div>

      {/* Channel info */}
      <div className="channel-info">
        <div className="channel-left">
          <img
            src="https://via.placeholder.com/48"
            alt="channel"
            className="channel-avatar"
          />
          <div>
            <h4>Channel Name</h4>
            <p>1.2M subscribers</p>
          </div>
        </div>
        <button className="subscribe-btn">Subscribe</button>
      </div>

      {/* Comments Section */}
      <div className="comments-section">
        <h3>Comments</h3>
        <form className="comment-form">
          <input type="text" placeholder="Add a comment..." />
          <button type="submit">Post</button>
        </form>

        <div className="comment">
          <strong>User123</strong>
          <p>This is a sample comment!</p>
        </div>

        <div className="comment">
          <strong>Viewer456</strong>
          <p>Awesome content 🔥</p>
        </div>
      </div>
    </div>
  );
};

export default Watch;
