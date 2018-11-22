import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { WebService } from '../service/webservice';
import { MessageService } from '../service/message.service';
import { APIConstantService } from '../service/APIConstants.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private login: any = {};
  constructor(private routerSerivce: Router,
    private webService: WebService,
    private messageServicde: MessageService,
    private apiConstantService: APIConstantService) {

  }
  private ResponseModel: any = {
    success: String,
    message: String,
    data:{}
  }
  ngOnInit() {
  }

  signIn() {
    //alert(this.login.email + " : " +this.login.password)
    if(this.validateInputs()) {
      this.webService.post(this.apiConstantService.getAPILEndPoint('login'),this.login).subscribe((resp)=>{
     this.ResponseModel = resp;
        if(this.ResponseModel.message == "User login successfully") {
          this.routerSerivce.navigate(['/homepage'])
        }
 
      },(error)=>{
        this.messageServicde.error(this.ResponseModel.message);
      })
    }
  }

  validateInputs() {
    if (this.login.email == undefined) {
      this.messageServicde.error("Please enter email")
      return false;
    }else if(this.login.password == undefined) {
      this.messageServicde.error("Please enetr password");
      return false;
    }else {
      return true;
    }
  }

}
