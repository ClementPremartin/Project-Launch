
export type SchoolType = {
    id: string,
    city_name: string,
}

export type SkillType = {
    id: string,
    skill_name: string,
    rate: number,
}


export type WilderType = {
    id: string,
    firstname: string,
    lastname: string,
    description: string,
    school: SchoolType,
    skills: SkillType[],
}