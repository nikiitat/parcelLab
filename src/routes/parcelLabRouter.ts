import { Router } from 'express';
import dataHandler from '../controllers/dataHandler';
import asyncHandler from '../middleware/asyncErrorHandler';
import validateRequest from '../middleware/validateRequest';

const router = Router();

router.post('/data', validateRequest, asyncHandler(dataHandler));

export default router;
