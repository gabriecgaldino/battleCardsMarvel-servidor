import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateUsers1654799915460 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns:[
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                    },
                    {
                        name: 'age',
                        type: 'varchar',
                    },
                    {
                        name: 'username',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                    },
                    {
                        name: 'score',
                        type: 'varchar',
                    },
                    {
                        name: 'id_cardCollection',
                        type: 'uuid',
                        isUnique: true,
                        isNullable: true
                    },
                    {
                        name: 'id_Wallet',
                        type: 'uuid',
                        isUnique: true,
                        isNullable: true
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('users')
    }

}
