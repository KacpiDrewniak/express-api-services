import { RequestHandler } from 'express'
import {runChat} from "../services";



export const getPrompt: RequestHandler = ({body}, res) => {
    const {startData,question} = body;
    runChat(startData,question).then(e => res.status(200).json(e))
}

