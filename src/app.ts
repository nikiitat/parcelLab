import express, { json } from 'express';
import morgan from 'morgan';

import errorHandler from './middleware/errorHandler';
import parcelLabRouter from './routes/parcelLabRouter';
import { NODE_ENV, PORT } from './utils/envEnums';

const app = express();

app.use(json());

if (process.env.NODE_ENV === 'development') {
  morgan.token('req-body', (req: express.Request) => JSON.stringify(req.body));

  app.use(
    morgan(
      ':method :url :req-body - :status :response-time ms :res[content-length]',
    ),
  );
}

app.use('/parcellab', parcelLabRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `Server is running in ${NODE_ENV} mode on: http://localhost:${PORT}`,
  );
});
