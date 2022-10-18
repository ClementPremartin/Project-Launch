import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import School from "../School/SchoolEntity";
import Skill from "../Skill/SkillEntity";

@Entity()
@ObjectType()
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
  @Field(() => ID)
  id: string;

  @Column()
  @Field()
  firstname: string;

  @Column()
  @Field()
  lastname: string;

  @Column({nullable: true})
  @Field()
  description: string;

  @ManyToOne(() => School, (school) => school.wilders, {eager:true})
  @Field(() => School)
  school: School;

  @ManyToMany(() => Skill, {eager: true})
  @JoinTable()
  @Field(() => [Skill])
  skills: Skill[];

}
