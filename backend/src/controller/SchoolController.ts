import SchoolRepository from "../models/School/SchoolRepository";
import { getErrorMessage } from "../utils";
import { Request, Response } from "express";

const findAllSchools = async (req: Request, res: Response) => {
    try {
        const schools = await SchoolRepository.getSchools();
        res.json(schools).status(200);
    } catch(error) {
        res.status(404).json({error: getErrorMessage(error)})
    }
}

export {
    findAllSchools,
}