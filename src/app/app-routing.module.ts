import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

import { ClasslistComponent} from './classlist/classlist.component';



import { ListComponent } from './list/list.component';

import { LoginComponent } from './login/login.component';
import { OverlayComponent } from './overlay/overlay.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


const routes: Routes = [
  { path:'register' , component:RegisterComponent },
  {path :'studentlist',component: ListComponent},
  { path:'profile',component: ProfileComponent },
  {path: 'classlist',component:ClasslistComponent},
  { path:'login', component: LoginComponent},
  { path: 'overlay', component: OverlayComponent},
  { path: 'forgotpassword', component: ForgotPasswordComponent},
  { path: '', component:LoginComponent}
];



 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 export const routingComponents=[
   ListComponent,
   ProfileComponent,
   RegisterComponent,
   ClasslistComponent,
   LoginComponent,
   OverlayComponent,
   ForgotPasswordComponent
 ];
