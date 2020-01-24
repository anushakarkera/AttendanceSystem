import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ClassComponent } from './class/class.component';
import { ClasslistComponent } from './classlist/classlist.component';
import { CalenderComponent } from './calender/calender.component';
import { MatDialogModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { StudentlistService } from './studentlist.service';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { UploadProfileComponent } from './upload-profile/upload-profile.component';
import { DateselectorComponent } from './dateselector/dateselector.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
<<<<<<< HEAD

=======
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
>>>>>>> 0a402b4c83ee8c9bf2dcf76bbc04ec71a7caacac
@NgModule({
  declarations: [
    AppComponent,
    ClassComponent,
    ClasslistComponent,
    CalenderComponent,
    routingComponents,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    UploadProfileComponent,
    DateselectorComponent,
    ConfirmDialogComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  entryComponents: [
    UploadProfileComponent,
    ConfirmDialogComponent
  ],
  providers: [StudentlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
