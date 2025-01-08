import { Body, Controller, Get, Param, Post, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from './dtos/CreateUser.dto';

@Controller('users')
export class UsersController {

    @Get()
    getUsers(@Query('sortBy') sortBy: string) {
        console.log(sortBy)
        return [{ username: "Olivier", email: "kwizeraolivier@gmail.com" }]
    }

    @Post('posts')
    createUser(@Body() userData: CreateUserDto) {
        console.log(userData.email)
        return {};
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
        console.log(id)
        return { id }
    }
}


