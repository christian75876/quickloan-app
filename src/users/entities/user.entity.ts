import { Loans } from "src/loans/entities/loans.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity() 
export class User {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column() 
    firstName: string;

    @Column()
    lastName: string;

    @Column({ default: true }) 
    isActive: boolean;

    @OneToMany (() => Loans, (loan) => loan.user)
    loans: Loans[]
}