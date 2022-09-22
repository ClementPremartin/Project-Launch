import { Column, Entity, Index, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import Wilder from "../Wilder/WilderEntity";


@Entity()
export default class Skill {
    @PrimaryGeneratedColumn("uuid")
    id: String;

    @Column()
    @Index({unique: true})
    skill_name: string;

    @Column()
    rate: number;

    @ManyToMany(() => Wilder, (wilder) => wilder.skills)
    wilders: Wilder[];
}