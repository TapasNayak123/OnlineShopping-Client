import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../service/webservice';
import { MessageService } from '../service/message.service';
import { APIConstantService } from '../service/APIConstants.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  private registration: any = {};
  constructor(private webService: WebService,
    private messageService: MessageService,
    private apiConstantService: APIConstantService,
    private routerService: Router) {

  }
  private ResponseModel: any = {
    success: String,
    message: String,
    data:{}
  }
  ngOnInit() {
  }

  register() {
    if (this.validate()) {
      this.webService.post(this.apiConstantService.getAPILEndPoint('register'), this.registration).subscribe((resp) => {
       this.ResponseModel = resp;
        this.messageService.success(this.ResponseModel.message);
        if(this.ResponseModel.message != "User already present"){
        this.routerService.navigate(['/'])
      }      
    
      }, (error) => {
        this.messageService.error(this.ResponseModel.message);
      })
    }
  } 

  validate() {
    if (this.registration.name == undefined) {
      this.messageService.error("Name Required");
      return false;
    } else if (this.registration.email == undefined) {
      this.messageService.error("Email Required");
      return false;
    } else if (this.registration.mobile == undefined) {
      this.messageService.error("Mobile Number Required");
      return false;
    } else if (this.registration.password == undefined) {
      this.messageService.error("Password Required");
      return false;
    } else {
      return true;
    }
  }

}
