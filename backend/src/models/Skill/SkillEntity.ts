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
    rate: string;

    @ManyToMany(() => Wilder, (wilder) => wilder.skills)
    wilders: Wilder[];
}


// module.exports = new EntitySchema({
//     name: "skill",
//     columns: {
//         id: {
//             primary: true,
//             type: "uuid",
//             generated: "uuid"
//         },
//         skill_name: {
//             type: "text",
//             unique: true,
//         },
//         rate: {
//             type: "int",
//             nullable: true,
//         }
//     },
// });