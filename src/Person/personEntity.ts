import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Person {
    @PrimaryColumn()
    id: number;
    @Column()
    name: string
    @Column()
    age: number;
}