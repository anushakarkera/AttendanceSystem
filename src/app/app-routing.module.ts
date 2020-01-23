import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
// import { ClassComponent } from './class/class.component';
import { ListComponent } from './list/list.component';
import { ClasslistComponent } from './classlist/classlist.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path:'register' , component:RegisterComponent },
  {path :'studentlist',component: ListComponent},
  { path:'profile',component: ProfileComponent },
  {path: 'classlist',component:ClasslistComponent},
  { path:'login', component: LoginComponent}
];


 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 export const routingcomponents=[
   ListComponent,
   ProfileComponent,
   RegisterComponent,
   ClasslistComponent,
   LoginComponent
 ];
