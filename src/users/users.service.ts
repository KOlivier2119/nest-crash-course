import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    fetchUsers() {
        return [
            { username: "Olivier", email: "kwizeraolivier2119@gmail.com" }
        ]
    }
}
