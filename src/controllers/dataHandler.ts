import { Request, Response } from 'express';

const dataHandler = async (req: Request, res: Response) => {
  const body = req.body;

  console.log(body);

  res.send(body);
};

export default dataHandler;
