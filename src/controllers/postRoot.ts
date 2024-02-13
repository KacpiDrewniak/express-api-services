import { RequestHandler } from 'express'


export const postRoot : RequestHandler = (req, res) => {
    const json = req.body
    res.json(json)
}

