import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {

  successMessage:string="";
  bookForm!:FormGroup

  
  constructor(private fb:FormBuilder ) {}

  ngOnInit(): void {
    this.bookForm=this.fb.group({
      CustomerName:["",[Validators.required]],
      Email:["",Validators.required],
      DateofAppointment:["",Validators.required]


    })
  }


bookAppointment(){};
}