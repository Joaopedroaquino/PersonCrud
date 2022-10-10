import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class person1665404007877 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: "person",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "age",
                        type: "int"
                    }
                ]
            })

        )







    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("person")
    }

}
