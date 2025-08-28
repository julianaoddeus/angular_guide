import { Component } from '@angular/core';
import { DUMMY_USERS } from '../../helpers/dummy-users';

const randonIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randonIndex];
}
