import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Wilder from "../Wilder/WilderEntity";


@Entity()
export default class School {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    @Index({unique: true})
    city_name: string;

    @OneToMany(() => Wilder, (wilder) => wilder.school)
    wilders: Wilder[];
}

















// const EntitySchema =  require("typeorm").EntitySchema;

// module.exports = new EntitySchema({
//     name: "school",
//     columns: {
//         id: {
//             primary: true,
//             type: "uuid",
//             generated: "uuid"
//         },
//         city_name: {
//             type: "text",
//             unique: true,
//         },
//     },
// });