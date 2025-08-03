import React from "react";
import { Link } from "react-router-dom";
import channels from "../data/channels";
import "./VideoCard.css";

const VideoCard = ({ video }) => {
  const {
    id,
    thumbnail,
    title,
    views,
    duration,
    channelId
  } = video;

  const channel = channels.find(ch => ch.channelId === channelId);

  return (
    <div className="video-card">
      <Link to={`/watch/${id}`}>
        <div className="thumbnail-wrapper">
          <img src={thumbnail} alt="thumbnail" className="thumbnail" />
          <span className="duration">{duration}</span>
        </div>
      </Link>

      <div className="video-info">
        {channel && (
          <Link to={`/channel/${channel.channelId}`}>
            <img src={channel.logoUrl} alt="channel logo" className="channel-logo" />
          </Link>
        )}

        <div className="text-info">
          <Link to={`/watch/${id}`} className="video-title">
            {title}
          </Link>
          {channel && (
            <Link to={`/channel/${channel.channelId}`} className="channel-name">
              {channel.name}
            </Link>
          )}
          <p className="video-views">{views} views</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;


