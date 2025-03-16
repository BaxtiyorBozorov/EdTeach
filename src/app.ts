import express from "express";
import { connect } from "./common/db/connect";
import { ENV } from "./common/config";
import cors from "cors";

import courseRouter from './routes/course.routes'
import enrollmentRouter from './routes/enrollmetn.routes'
import userRouter from './routes/user.routes'
import progressRouter from './routes/progress.routes'


const app = express();



async function main(){
  await connect();
  app.use(cors())
  app.use(express.json())
  app.use('/courses' , courseRouter)
  app.use('/enrollments' , enrollmentRouter)
  app.use('/users' , userRouter)
  app.use('/progress' , progressRouter)


  console.log(`Server is running on http://${ENV.HOST}:${ENV.PORT}`);
  
}

app.listen(ENV.PORT , ENV.HOST ,  main);