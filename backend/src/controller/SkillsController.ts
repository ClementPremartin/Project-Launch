import SkillRepository from "../models/Skill/SkillRepository";
import { getErrorMessage } from "../utils";
import { Request, Response } from "express";

const findAllSkills = async (req: Request, res: Response) => {
    try {
        const skills = await SkillRepository.getSkills();
        res.json(skills).status(200);
    } catch(error) {
        res.status(404).json({error: getErrorMessage(error)})
    }
}

export {
    findAllSkills,
}