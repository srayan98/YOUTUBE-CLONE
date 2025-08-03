import express from 'express';
import { createComment, deleteComment, getCommentsByVideo } from '../controllers/commentController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', verifyToken, createComment);
router.get('/:videoId', getCommentsByVideo);
router.delete('/:commentId', verifyToken, deleteComment);

export default router;
