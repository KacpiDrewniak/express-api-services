import express from 'express'
import {getPrompt, getRoot, postRoot} from "../controllers";


export const root = express.Router()

root.get('/', getRoot)
root.post('/', postRoot)
root.post('/prompt', getPrompt)

