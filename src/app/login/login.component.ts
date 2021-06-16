import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { serverResponse } from '../entity/common/response';
import { LoginDto } from '../entity/login/LoginDto';
import { User_Admin } from '../entity/login/user_admin';
import { enUserType } from '../shared/common/enums';
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
  loginDto: LoginDto = new LoginDto();
  constructor(private fb: FormBuilder,
    private common: CommonService,
    private SpinnerService: NgxSpinnerService,
    private route: Router) { }

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
      Object.assign(this.loginDto, this.loginForm.value);
       this.loginDto.UserType = enUserType.Admin;
      this.common.login(this.loginDto).subscribe((res: serverResponse) => {
        if (res.Success == true) {
          //add rounting
          window.alert("Login successfully")
        }
        else {
          this.SpinnerService.hide();
          window.alert("Login failed")
        }
      },
        (err) => {
          this.SpinnerService.hide();
        }, () => {
          this.SpinnerService.hide();
        });

    }
    if (!isAdmin) {
      this.SpinnerService.show();
      Object.assign(this.loginDto,  this.userLoginForm.value );
       this.loginDto.UserType = enUserType.User;
      this.common.login(this.loginDto).subscribe((res: serverResponse) => {
        if (res.Success == true) {
          //add rounting
          window.alert("Login successfully")
          this.route.navigate(["/viewtestandpricing"])
        }
        else {
          this.SpinnerService.hide();
          window.alert("Login failed")
        }
      },
        (err) => {
          this.SpinnerService.hide();
        }, () => {
          this.SpinnerService.hide();
        });
    }
  }
  adminlogin() {

  }


}