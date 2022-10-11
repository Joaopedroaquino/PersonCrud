import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "./person.entity";

@Entity({name:'address'})
export class AddressPerson {

 @PrimaryGeneratedColumn()
 id: number;

@Column({name:'address'})
address: string

@Column({name:'house_number'})
house_number: number

@PrimaryColumn({ name: 'person_id'})
person_id: number;




@ManyToOne(() => Person, (person) => person.personAddress)
@JoinColumn({name: 'person_id'})
person: Person;



///,{onDelete: 'CASCADE'}

}