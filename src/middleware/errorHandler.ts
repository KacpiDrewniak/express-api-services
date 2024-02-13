import { ErrorRequestHandler } from 'express'
import {config} from "../config";


export const errorHandler: ErrorRequestHandler = (err, _req, res) => {
    console.error(err);
    return res.status(500).json({
        message: config.nodeEnv === 'production' ?
            'unknown error' :
            `${err}`
    })
}
