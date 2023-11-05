import { Router } from 'express';
import dataHandler from '../controllers/dataHandler';
import asyncHandler from '../middleware/asyncErrorHandler';

const router = Router();

router.post('/data', asyncHandler(dataHandler));

export default router;
