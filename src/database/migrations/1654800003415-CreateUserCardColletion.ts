import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateUserCardColletion1654800003415 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'cardCollection',
                columns: [
                    {
                        name: 'id_cardCollection',
                        type: 'varchar',
                        isNullable: false,
                        isPrimary: true,
                        generationStrategy: 'uuid',
                    },
                    {
                        name: 'id_card',
                        type: 'varchar',
                        generationStrategy: 'uuid',
                        isUnique: true,
                        isNullable: false,
                    },
                    {
                        name: 'heroName',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'pictureHero',
                        type: 'varchar',
                    },
                    {
                        name: 'descriptionHero',
                        type: 'varchar',
                    },
                    {
                        name: 'atkHero',
                        type: 'int',
                    },
                    {
                        name: 'defHero',
                        type: 'int',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('cardCollection')
    }

}
