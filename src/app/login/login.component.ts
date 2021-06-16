import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { serverResponse } from '../entity/common/response';
import { User_Admin } from '../entity/login/user_admin';
import { CommonService } from '../shared/service/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  successMessage: string = "";
  loginForm!: FormGroup;
  userLoginForm!: FormGroup;
  userDetails!: User_Admin;
  constructor(private fb: FormBuilder,
    private common: CommonService,
    private SpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^([a-z0-9_\.\-])+\@(([a-z0-9\-])+\.)+([a-z0-9]{2,5})+$")]],
      password: ['', [Validators.required, Validators.pattern("[A-Za-z0-9@!_]{6,}")]]
    })
    this.userLoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^([a-z0-9_\.\-])+\@(([a-z0-9\-])+\.)+([a-z0-9]{2,5})+$")]],
      password: ['', [Validators.required, Validators.pattern("[A-Za-z0-9@!_]{6,}")]]
    })
  }

  userlogin(isAdmin: boolean) {
    console.log(isAdmin)
    console.log(this.loginForm.value);
    if (isAdmin) {
      this.SpinnerService.show();
      this.common.login(this.loginForm.value).subscribe((res: serverResponse) => {
        if (res.Success == true) {
          //add rounting

        }
      },
        (err) => {

        }, () => {

        });
      setTimeout(() => {
        this.SpinnerService.hide();
      }, 10000);
    }
    if (!isAdmin) {
      this.SpinnerService.show();
      setTimeout(() => {
        this.SpinnerService.hide();
      }, 10000);
    }
  }
  adminlogin() {

  }


}