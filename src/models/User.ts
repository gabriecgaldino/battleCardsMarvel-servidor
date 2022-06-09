import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
class Users {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column('time with time zone')
    age: Date

    @Column()
    email: string

    @Column('uuid')
    id_Wallet: string

    @Column('uuid')
    id_cardCollection: string

    @Column()
    score: Number

    @Column()
    username: string

    @Column()
    password: string    
}


export default Users