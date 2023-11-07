import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
  // providers:[UserService]
})
export class UserListComponent implements OnInit {

  constructor(private monservice:UserService) { }

  ngOnInit(): void {
    console.log("user-list-component"+this.monservice.getNb());
  }

}
