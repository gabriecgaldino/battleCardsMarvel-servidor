import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
class Users {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    age: string

    @Column()
    email: string

    @PrimaryGeneratedColumn('uuid')
    id_Wallet: string

    @PrimaryGeneratedColumn('uuid')
    id_cardCollection: string

    @Column()
    score: Number

    @Column()
    username: string

    @Column()
    password: string    
}


export default Users