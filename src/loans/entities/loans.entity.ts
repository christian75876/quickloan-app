import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('loans')
export class Loans {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    idUser: number

    @Column()
    description: string;

    @ManyToOne(() => User, (user) => user.loans)
    user: User;
}