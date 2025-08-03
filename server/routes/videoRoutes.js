import express from 'express';
import {
  uploadVideo,
  getAllVideos,
  getVideo,
  updateVideo,
  deleteVideo
} from '../controllers/videoController.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.post('/', verifyToken, uploadVideo);
router.get('/', getAllVideos);
router.get('/:id', getVideo);
router.put('/:id', verifyToken, updateVideo);
router.delete('/:id', verifyToken, deleteVideo);

export default router;
