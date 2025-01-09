import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
    private FakeUsers = [
        { username: 'Anson', email: 'anson@gmail.com' },
        { username: 'Olivier', email: 'kwizeraolivier2119@gmail.com' },
        { username: 'James', email: 'james@gmail.com' },
        { username: 'Gregory', email: 'gregory@gmail.com' }
    ]
    fetchUsers() {
        return this.FakeUsers;
    }

    createUser(userDetails: CreateUserType) {
        this.FakeUsers.push(userDetails);
        return;
    }
}
