import { Query, Resolver } from "type-graphql";

import Skill from "../models/Skill/SkillEntity";
import SkillRepository from "../models/Skill/SkillRepository";

@Resolver(Skill)
export default class SkillsResolver {
    @Query(() => [Skill])
    skills(): Promise<Skill[]> {
        return SkillRepository.getSkills()
    }
}