import { Entity, Column, PrimaryGeneratedColumn, Double } from "typeorm"

@Entity('wallet')
class Wallet {
    @PrimaryGeneratedColumn('uuid')
    id_Wallet: string

    @Column()
    coins: Number
}

export default Wallet

