import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule}  from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RegisterComponent} from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
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
