import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ClassComponent } from './class/class.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
{path : 'studentlist',component: ListComponent},
{ path:'profile',component: ProfileComponent }
];


 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 export const routingcomponents=[
   ListComponent,
   ProfileComponent
 ];
