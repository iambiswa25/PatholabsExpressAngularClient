import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../shared/service/common.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  successMessage:string =""

  regForm!:FormGroup

  constructor(private fb: FormBuilder,
    _commonServc:CommonService) { }

  ngOnInit(): void {
    this.regForm = this.fb.group({
      name: ['',[Validators.required]],
      mobileNumber: ['',[Validators.required, Validators.min(1000000000),Validators.max(9999999999)]],
      email:['',[Validators.required, Validators.pattern("[a-zA-Z0-9]*@gmail.com")]],
      password: ['',[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$")]],
      address:['',Validators.required],
      age:['',Validators.required],
      gender:['',[Validators.required,Validators.pattern("[a-z]")]]
  
    })}
  register(){
    this.successMessage = "Successfully Registered..."
    // console.log(this.regForm)
  }


}
