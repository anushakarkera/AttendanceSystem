import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassComponent } from './class/class.component';
import { ClasslistComponent} from './classlist/classlist.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
{path: 'classlist',component:ClasslistComponent},

{path: 'register',component:RegisterComponent},

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[ClasslistComponent,RegisterComponent]