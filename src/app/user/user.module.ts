import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';
import { AdddUserComponent } from './components/addd-user/addd-user.component';



@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
    AdddUserComponent
  ],
  
  imports: [
    CommonModule, //par défaut : directive ngFor, ngIf, ngSwitch, ngClass, ngStyle, ....
    UserRoutingModule,
    FormsModule
  ],
  providers: [UserService]
})
export class UserModule { }
