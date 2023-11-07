import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-addd-user',
  templateUrl: './addd-user.component.html',
  styleUrls: ['./addd-user.component.css']
})
export class AdddUserComponent {
user : User = new User();





}
