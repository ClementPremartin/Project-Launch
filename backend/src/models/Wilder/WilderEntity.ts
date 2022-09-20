import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import School from "../School/SchoolEntity";
import Skill from "../Skill/SkillEntity";

@Entity()
export default class Wilder {
  constructor(
    firstname: string,
    lastname: string,
    description?: string,
    school?: School,
    skills?: Skill[]
  ) {
    this.firstname = firstname;
    this.lastname = lastname;

    if(description) {
      this.description = description;
    }
    if(school) {
      this.school = school;
    }
    if(skills) {
      this.skills = skills;
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





// module.exports = new EntitySchema({
//   name: "wilder",
//   columns: {
//     id: {
//       primary: true,
//       type: "uuid",
//       generated: "uuid",
//     },
//     firstname: {
//       type: "text",
//     },
//     lastname: {
//       type: "text",
//     },
//     description: {
//       type: "text",
//       nullable: true,
//     },
//   },
//   relations: {
//     school: {
//       target: "school",
//       type: "many-to-one",
//       eager: true,
//     },
//     skills: {
//       target: "skill",
//       type: "many-to-many",
//       joinTable: true,
//       eager: true,
//     },
//   },
// });
