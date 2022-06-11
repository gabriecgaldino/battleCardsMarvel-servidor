import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateUsers1654799915460 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns:[
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        isNullable: false,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'age',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'username',
                        type: 'varchar',
                        isNullable: false,
                        isUnique: true,
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'id_Wallet',
                        type: 'varchar',
                        isNullable: false,
                        isUnique: true,
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'id_cardCollection',
                        type: 'varchar',
                        isNullable: false,
                        isUnique: true,
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'score',
                        type: 'varchar',
                        isNullable: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('users')
    }

}
