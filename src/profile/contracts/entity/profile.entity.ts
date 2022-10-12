import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'profile'})
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({name:'profile_name'})
    name: string;
}