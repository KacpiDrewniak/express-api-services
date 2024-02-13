import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import {errorHandler, fourOhFour} from "./middleware";
import {root} from "./routes";

export const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(cors({
    origin:'*'
}))

app.use(helmet())
app.use(morgan('tiny'))

app.use('/', root)

app.use(fourOhFour)
app.use(errorHandler)

