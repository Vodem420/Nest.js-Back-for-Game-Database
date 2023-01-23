import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { IsEmail, Length } from "sequelize-typescript";

export class CreateUserDto{
    @ApiProperty({example: '123@gmail.com', description: 'User email'})
    @IsString({message: 'Should be a string'})
    @IsEmail({}, {message: 'vrong email'})
    readonly email: string;
    @ApiProperty({example: '1234', description: 'User password'})
    @IsString({message: 'Should be a string'})
    @Length( 4, 16, {message: 'form 4 to 16'})
    readonly password: string;
}