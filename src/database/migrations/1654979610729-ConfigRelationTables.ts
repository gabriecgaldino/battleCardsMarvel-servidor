import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export default class ConfigRelationTables1654979610729 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('users', new TableColumn({
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
        }))
        await queryRunner.addColumn('users', new TableColumn({
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
        }))
        await queryRunner.addColumn('wallets', new TableColumn({
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
        }))
        await queryRunner.addColumn('wallets', new TableColumn({
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
        }))
        await queryRunner.addColumn('cardCollection', new TableColumn({
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
        }))
        await queryRunner.addColumn('cardCollection', new TableColumn({
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
        }))
        await queryRunner.createForeignKey('users', new TableForeignKey({
            name: 'CardCollectionFK_ID',
            columnNames: ['id_cardCollection'],
            referencedColumnNames: ['id'],
            referencedTableName: 'cardCollection',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }))
        await queryRunner.createForeignKey('users', new TableForeignKey({
            name: 'WalletFK_ID',
            columnNames: ['id_Wallet'],
            referencedColumnNames: ['id'],
            referencedTableName: 'wallets',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('users', 'CardCollectionFK_ID')
        await queryRunner.dropForeignKey('users', 'WalletFK_ID')
    }

}
