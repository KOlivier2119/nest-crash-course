import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    id: number;
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}