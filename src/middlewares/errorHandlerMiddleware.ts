import {Request, Response, NextFunction} from "express"

interface IError {
    type: string;
    message: string;
    code: string;
}

export default function errorHandler(error: IError, req: Request, res: Response, next: NextFunction){
    let {type, message} = error
    switch(type){
        case "bad_request": return res.status(400).send(message)
        case "unauthorized": return res.status(401).send(message)
        case "not_found": return res.status(404).send(message)
        case "conflict": return res.status(409).send(message)
        case "invalid_body": return res.status(422).send(message)
    }
    
    console.log(error)
    return res.status(500).send(error)
}

