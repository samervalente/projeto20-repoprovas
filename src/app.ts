import cors from 'cors';
import express, { json } from 'express';
import 'express-async-errors';
import errorHandlerMiddleware  from './middlewares/errorHandlerMiddleware';
import authRouter from './routes/authRouter';
import testRouter from "./routes/testRouter"

const app = express();
app.use(json());
app.use(cors());
app.use(authRouter);
app.use(testRouter)
app.use(errorHandlerMiddleware);

export default app;