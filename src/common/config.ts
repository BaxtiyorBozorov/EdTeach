import Dotenv from 'dotenv';
import * as path from 'path'

Dotenv.config({path : path.join(process.cwd() , '.env')})

export const ENV = {
    HOST: process.env.HOST || 'localhost',
    PORT: Number(process.env.PORT) || 3000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    MONGO_URL: process.env.MONGO_URL|| '?' ,
    JWT_SECRET: process.env.JWT_SECRET,

}