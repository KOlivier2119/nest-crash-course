import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
    private FakeUsers = [
        { id: 1, username: 'Anson', email: 'anson@gmail.com' },
        { id: 2, username: 'Olivier', email: 'kwizeraolivier2119@gmail.com' },
        { id: 3, username: 'James', email: 'james@gmail.com' },
        { id: 4, username: 'Gregory', email: 'gregory@gmail.com' }
    ]
    fetchUsers() {
        return this.FakeUsers;
    }

    createUser(userDetails: CreateUserType) {
        this.FakeUsers.push(userDetails);
        return;
    }

    fetchUserById(id: number) {
        console.log(id)
        const user = this.FakeUsers.find((user) => user.id == id);
        return user || "User Not Found";
    }
}
