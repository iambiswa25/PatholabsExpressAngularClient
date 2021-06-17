import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { serverResponse } from '../entity/common/response';
import { UserDto } from '../entity/Registration/registration';
import { enUserType } from '../shared/common/enums';
import { CommonService } from '../shared/service/common.service';

@Component({
  selector: 'app-admin-regd',
  templateUrl: './admin-regd.component.html',
  styleUrls: ['./admin-regd.component.css']
})
export class AdminRegdComponent implements OnInit {

  successMessage: string = ""
  regdData: UserDto = new UserDto();
  regForm!: FormGroup
  constructor(private fb: FormBuilder,private common: CommonService,
    private SpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.regForm = this.fb.group({
      name: ['', [Validators.required]],
      Contact_No: ['', [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]],
      email: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9]*@gmail.com")]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$")]],
      address: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', [Validators.required, Validators.pattern("[a-z]")]]

    })
  }
  register() {
    this.SpinnerService.show();
    Object.assign(this.regdData, this.regForm.value);
    this.regdData.UserType = enUserType.Admin;
    this.common.registeruser(this.regdData).subscribe((res: serverResponse) => {
      if (res.Success == true) {
        //add rounting
        window.alert("User Registered Successfully.");
      }
      else {
        this.SpinnerService.hide();
      }
    },
      (err) => {
        this.SpinnerService.hide();
      }, () => {
        this.SpinnerService.hide();
      });
  }
}
