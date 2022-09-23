import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import School from "../School/SchoolEntity";
import Skill from "../Skill/SkillEntity";

@Entity()
export default class Wilder {
  constructor(
    firstname: string,
    lastname: string,
    school: School,
    skills: Skill[],
    description?: string,
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.school = school;
    this.skills = skills

    if(description) {
      this.description = description;
    }
  }

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({nullable: true})
  description: string;

  @ManyToOne(() => School, (school) => school.wilders, {eager:true})
  school: School;

  @ManyToMany(() => Skill, {eager: true})
  @JoinTable()
  skills: Skill[];

}
