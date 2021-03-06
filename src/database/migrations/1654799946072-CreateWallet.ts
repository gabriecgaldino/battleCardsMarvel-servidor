import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateWallet1654799946072 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'wallets',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                        isPrimary: true,
                        isNullable: false,
                    },
                    {
                        name: 'coins',
                        type: 'int',
                        isNullable: false,
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('wallets')
    }

}
