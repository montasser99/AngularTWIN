import { Component } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
   //providers:[UserService]
})
export class AppComponent {

  constructor(/*private us:UserService*/){
    console.log("constructor");
  }
 ngOnInit(){ //méthode hook 
   // console.log("ngOnInit");
   // console.log(this.title);
  }
  title = 'Angular123';
  getVal(){
    alert("test");
  }
  setTitle(title:string){
   this.title=title;
   console.log(this.title);
  }
}
