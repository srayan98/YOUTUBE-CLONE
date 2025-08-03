import React from "react";
import { useParams } from "react-router-dom";
import videos from "../data/videos";
import channels from "../data/channels";
import VideoCard from "../components/VideoCard";
import "./Channel.css";

const Channel = () => {
  const { id } = useParams();
  const channel = channels.find(ch => ch.channelId === id);
  const channelVideos = videos.filter(video => video.channelId === id);

  if (!channel) {
    return <div className="channel-not-found">Channel not found</div>;
  }

  return (
    <div className="channel-page">
      <div className="channel-banner">
        <img src={channel.bannerUrl} alt="channel banner" />
      </div>

      <div className="channel-header">
        <img className="channel-avatar" src={channel.logoUrl} alt="channel avatar" />
        <div className="channel-meta">
          <h2>{channel.name}</h2>
          <p>{channel.subscribers} subscribers</p>
        </div>
      </div>

      <h3 className="video-section-title">Videos</h3>
      <div className="channel-videos">
        {channelVideos.length > 0 ? (
          channelVideos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))
        ) : (
          <p>No videos uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default Channel;
