import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-regd',
  templateUrl: './admin-regd.component.html',
  styleUrls: ['./admin-regd.component.css']
})
export class AdminRegdComponent implements OnInit {

  successMessage: string = ""

  regForm!: FormGroup
  constructor(private fb: FormBuilder,) { }

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
    this.successMessage = "Successfully Registered...";
  }
}
