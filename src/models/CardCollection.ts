import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'


@Entity('cardCollection')
class CardCollection {
    @PrimaryGeneratedColumn('uuid')
    id_cardCollection: string

    @PrimaryGeneratedColumn('uuid')
    id_card: string

    @Column()
    heroName: string

    @Column()
    pictureHero: string
    
    @Column()
    descriptionHero: string

    @Column()
    atkHero: Number

    @Column()
    defHero: Number
}

export default CardCollection