import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table, BelongsToMany } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttrs{
    email: string,
    password: string
}

@Table({tableName: 'users'})
export class User extends Model< User, UserCreationAttrs >{
    @ApiProperty({example: '1', description: 'User id'})
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id:  number;

    @ApiProperty({example: '123@gmail.com', description: 'User email'})
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @ApiProperty({example: '1234', description: 'User password'})
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @ApiProperty({example: 'true', description: 'User ban status'})
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    banned: boolean;

    @ApiProperty({example: 'no frendly', description: 'User ban status'})
    @Column({ type: DataType.STRING, allowNull: true })
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]
}