import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassComponent } from './class/class.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
{path : 'studentlist',component: ListComponent}



];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 export const routingcomponents=[
   ListComponent,
 ]