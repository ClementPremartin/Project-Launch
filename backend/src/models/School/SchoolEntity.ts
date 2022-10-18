import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Wilder from "../Wilder/WilderEntity";


@Entity()
@ObjectType()
export default class School {
    @PrimaryGeneratedColumn("uuid")
    @Field(() => ID)
    id: string;

    @Column()
    @Index({unique: true})
    @Field()
    city_name: string;

    @OneToMany(() => Wilder, (wilder) => wilder.school)
    @Field(() => [School])
    wilders: Wilder[];
}
