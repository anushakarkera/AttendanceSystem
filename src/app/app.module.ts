import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ClassComponent } from './class/class.component';
import { ClasslistComponent } from './classlist/classlist.component';
import { CalenderComponent } from './calender/calender.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassComponent,
    ClasslistComponent,
    CalenderComponent,
    routingComponent,
   ProfileComponent,
   LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
