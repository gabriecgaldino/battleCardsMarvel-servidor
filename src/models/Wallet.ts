import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity('wallets')
class Wallet {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    coins: Number
}

export default Wallet

