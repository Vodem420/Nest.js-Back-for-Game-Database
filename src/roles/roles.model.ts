import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table, BelongsToMany } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { UserRoles } from "./user-roles.model";

interface RoleCreationAttrs{
    value: string,
    description: string
}

@Table({tableName: 'roles'})
export class Role extends Model< Role, RoleCreationAttrs >{
    @ApiProperty({example: '1', description: 'User id'})
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id:  number;

    @ApiProperty({example: 'admin', description: 'Role type'})
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    value: string;

    @ApiProperty({example: 'can do anything', description: 'Role description'})
    @Column({ type: DataType.STRING, allowNull: false })
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[]
}