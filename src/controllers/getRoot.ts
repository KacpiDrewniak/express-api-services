import { RequestHandler } from 'express'
import {config} from "../config";

export const getRoot: RequestHandler = (_req, res) => {
    res.status(200).json({
        name: config.name,
        description: config.description,
        version: config.version
    });
}

