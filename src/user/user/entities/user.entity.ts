import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

@PrimaryGeneratedColumn()
id: number

@Column({name:'name', length:100})
name: string

@Column({name:'email'})
email: string

@Column({name:'password'})
paswword: string

}

