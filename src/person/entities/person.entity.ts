import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { AddressPerson } from "./address.entity";

@Entity()
export class Person {

@PrimaryGeneratedColumn()
id: number

@Column({name:'name'})
name: string

@Column({name:'age'})
age: number



@OneToMany(() => AddressPerson, (addressPerson) => addressPerson.person)
// @JoinColumn()
 personAddress: AddressPerson[];


}


///, addressPerson => addressPerson.person

//ref
