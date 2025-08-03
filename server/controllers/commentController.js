import Comment from '../models/Comment.js';
import Video from '../models/Video.js';

// Create a new comment
export const createComment = async (req, res) => {
  const { videoId, text } = req.body;

  try {
    const newComment = new Comment({
      userId: req.user.id,
      videoId,
      text,
    });

    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create comment.' });
  }
};

// Get all comments for a video
export const getCommentsByVideo = async (req, res) => {
  try {
    const comments = await Comment.find({ videoId: req.params.videoId }).sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch comments.' });
  }
};

// Delete a comment
export const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId);

    if (comment.userId === req.user.id) {
      await Comment.findByIdAndDelete(req.params.commentId);
      res.status(200).json({ message: 'Comment deleted.' });
    } else {
      res.status(403).json({ error: 'You can only delete your own comments.' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete comment.' });
  }
};
