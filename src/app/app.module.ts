import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingcomponents} from './app-routing.module';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule}  from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ClassComponent } from './class/class.component';
import { ProfileComponent } from './profile/profile.component';


import { AppComponent } from './app.component';
import { RegisterComponent} from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    ClassComponent,
   routingcomponents,
   ProfileComponent,
   LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
