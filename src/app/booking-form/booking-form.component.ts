import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validator, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { serverResponse } from '../entity/common/response';
import { CommonService } from '../shared/service/common.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {

  successMessage:string="";
  bookForm!:FormGroup

  
  constructor(private fb:FormBuilder, private common: CommonService,
    private SpinnerService: NgxSpinnerService,
    private route: Router ) {}

  ngOnInit(): void {
    this.bookForm=this.fb.group({
      CustomerName:["",[Validators.required]],
      Email:["",Validators.required],
      DateofAppointment:["",Validators.required]


    })
  }


bookAppointment(){
  this.SpinnerService.show();
  // Object.assign(this.loginDto, this.loginForm.value);
  //  this.loginDto.UserType = enUserType.Admin;
  this.common.addTest(this.bookForm.value).subscribe((res: serverResponse) => {
    if (res.Success == true) {
      //add rounting
      window.alert("Appointment Booked Successfully!!")
      this.bookForm.setValue({CustomerName:"",Email:"",DateofAppointment:""})
    }
    else{
      alert("Failed to Booked the appointment");
    }
  },
    (err) => {
      this.SpinnerService.hide();
    }, () => {
      this.SpinnerService.hide();
    });
};
}