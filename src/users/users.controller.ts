import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    
    @Get()
    getUser() {
        return { username: "Olivier", email: "kwizeraolivier@gmail.com" }
    }
}


