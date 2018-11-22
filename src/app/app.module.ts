import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { routingModule } from './app.routing';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { WebService } from './service/webservice';
import { MessageService } from './service/message.service';
import { APIConstantService } from './service/APIConstants.service';
import { HttpClientModule  } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MessageComponent } from './message/message.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './homepage/homepage.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgetpasswordComponent,
    MessageComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routingModule,
    HttpClientModule,
    HttpModule,
    NgbModule
  ],
  providers: [WebService,MessageService,APIConstantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
