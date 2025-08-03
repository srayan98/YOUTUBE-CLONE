import Video from '../models/Video.js';

// Upload new video
export const uploadVideo = async (req, res) => {
  try {
    const { title, description, videoUrl, thumbnailUrl } = req.body;
    const userId = req.user.id; // Comes from verifyToken middleware

    const newVideo = new Video({
      userId,
      title,
      description,
      videoUrl,
      thumbnailUrl,
    });

    await newVideo.save();

    res.status(201).json({ message: "Video uploaded successfully", video: newVideo });
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all videos
export const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find().sort({ createdAt: -1 });
    res.status(200).json(videos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch videos.' });
  }
};

// Get video by ID
export const getVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ error: 'Video not found.' });
    res.status(200).json(video);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch video.' });
  }
};

// Update video
export const updateVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ error: 'Video not found.' });

    if (video.userId !== req.user.id)
      return res.status(403).json({ error: 'You can only update your own videos.' });

    const updatedVideo = await Video.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedVideo);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update video.' });
  }
};

// Delete video
export const deleteVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ error: 'Video not found.' });

    if (video.userId !== req.user.id)
      return res.status(403).json({ error: 'You can only delete your own videos.' });

    await Video.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Video deleted.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete video.' });
  }
};
