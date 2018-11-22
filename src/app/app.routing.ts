import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "register", component: RegistrationComponent },
    { path: "forgetpassword", component: ForgetpasswordComponent },
    { path: "homepage", component: HomepageComponent }
  ];
  export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);