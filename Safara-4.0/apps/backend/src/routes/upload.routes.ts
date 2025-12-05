import { Router } from 'express';
import { uploadFile } from '../controllers/upload.controller.js';
import { upload } from '../config/multer.js';

const router = Router();

router.post('/', upload.single('file'), uploadFile);

export default router;