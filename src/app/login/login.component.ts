import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  userDetails!: User_Admin;
  constructor(private fb: FormBuilder, private common: CommonService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
      password: ['', [Validators.required, Validators.pattern("[A-Za-z0-9@!_]{6,}")]]
    })
  }

  userlogin() {

  }
  adminlogin() {

  }


}