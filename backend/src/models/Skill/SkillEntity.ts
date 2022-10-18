import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, Index, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import Wilder from "../Wilder/WilderEntity";


@Entity()
@ObjectType()
export default class Skill {
    @PrimaryGeneratedColumn("uuid")
    @Field(() => ID)
    id: String;

    @Column()
    @Index({unique: true})
    @Field()
    skill_name: string;

    @Column()
    @Field()
    rate: number;

    @ManyToMany(() => Wilder, (wilder) => wilder.skills)
    @Field(()=> [Skill])
    wilders: Wilder[];
}