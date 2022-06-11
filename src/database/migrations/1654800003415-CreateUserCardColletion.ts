import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateUserCardColletion1654800003415 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'cardCollection',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                        isPrimary: true,
                    },
                    {
                        name: 'id_card',
                        type: 'uuid',
                        isUnique: true,
                        isNullable: true
                    },
                    {
                        name: 'heroName',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'pictureHero',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'descriptionHero',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'atkHero',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'defHero',
                        type: 'int',
                        isNullable: true
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('cardCollection')
    }

}
