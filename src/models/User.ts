import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm'

import Wallet from './Wallet'
import CardCollection from './CardCollection'


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

    @OneToOne(()=> Wallet)
    @JoinColumn({ name: 'id_Wallet'})
    wallet: Wallet

    @PrimaryGeneratedColumn('uuid')
    id_cardCollection: string

    @OneToOne(()=> CardCollection)
    @JoinColumn({ name: 'id_cardCollection'})
    cardcollection: CardCollection

    @Column()
    score: Number

    @Column()
    username: string

    @Column()
    password: string  
    
    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}


export default Users