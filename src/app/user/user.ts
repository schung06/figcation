import { Component } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.html',
    styleUrl: './user.css',
})
export class UserComponent {
    selectedUser = DUMMY_USERS[randomIndex];
}