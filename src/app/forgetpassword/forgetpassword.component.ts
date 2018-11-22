import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MessageService } from '../service/message.service';
import { WebService } from '../service/webservice';
import { APIConstantService } from '../service/APIConstants.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})

export class ForgetpasswordComponent implements OnInit {
  private isRetrieve: any = false;
  private forgetPassword: any = {};

  constructor(private routerSerivce: Router,
    private messageService: MessageService,
    private webService: WebService,
    private apiConstantService: APIConstantService) {

  }

  private UserModel: any = {
    _id: String,
    name: String,
    email: String,
    mobile: String,
    password: String
   
  }
  private ResponseModel: any = {
    success: String,
    message: String,
    data:{}
  }
  ngOnInit() {
  }

  retrievePassword() {
    if (this.validateEmail()) {
      this.webService.post(this.apiConstantService.getAPILEndPoint('forgetpassword'), this.forgetPassword).subscribe((resp) => {
      this.ResponseModel = resp;
        this.UserModel = this.ResponseModel.data;
        if (this.ResponseModel.message != "User not found") {
          this.messageService.success(this.ResponseModel.message);
          this.forgetPassword = {};
          this.isRetrieve = true;
        }
      }, (error) => {
        this.messageService.error(this.ResponseModel.message);
      })
    }
  }

  updatePassword() {
    this.isRetrieve = false;
    if (this.validatePassword()) {
      delete this.forgetPassword.cnfrmpassword;
      this.webService.put(this.apiConstantService.getAPILEndPoint('updatepassword/' + this.UserModel._id), this.forgetPassword).subscribe((resp) => {
        this.messageService.success(this.ResponseModel.message);
        this.routerSerivce.navigate(['/'])
      }, (error) => {
        this.messageService.error(this.ResponseModel.message);
      })
    }
  }

  validateEmail() {
    if (this.forgetPassword.email == undefined) {
      this.messageService.error("Email required");
      return false;
    } else {
      return true;
    }

  }
  validatePassword() {
    if (this.forgetPassword.password == undefined) {
      this.messageService.error("Password required");
      return false;
    } else if (this.forgetPassword.cnfrmpassword == undefined) {
      this.messageService.error("Confirm Password required");
      return false;
    } else if (this.forgetPassword.password != this.forgetPassword.cnfrmpassword) {
      this.messageService.error("Password and confirm password not matching");
      return false;
    } else {
      return true;
    }
  }

}
