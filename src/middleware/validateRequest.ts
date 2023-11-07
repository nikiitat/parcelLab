import { NextFunction, Request, Response } from 'express';
import { validateIncomingData } from '../utils/shemas';

export default function validateRequest(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const valid = validateIncomingData(req.body);

  if (!valid) return res.status(400).send(validateIncomingData.errors);

  next();
}
