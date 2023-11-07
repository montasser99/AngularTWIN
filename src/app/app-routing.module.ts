import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { SlideComponent } from './slide/slide.component';


const routes: Routes = [
  
  //pour la redirection des pages
  {path:"", redirectTo:"home", pathMatch:"full"}, 
  {path:"home", component:SlideComponent},
  
  //this is added for bien organiser les routes des composant et de plus gagne la memoire si on n'utilise pas leur composant 
  {path:"mainusers", loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
 
  // ce path return NotFoundComponent if we are added a false path
  {path:"**", component:NotFoundComponent} 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
