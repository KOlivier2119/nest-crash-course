import { IsEmail, isNotEmpty, IsNotEmpty, IsNumber } from "class-validator";

export class CreateUserDto {
    id: number;
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    age: number;
}