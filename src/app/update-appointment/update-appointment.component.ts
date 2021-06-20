import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validator, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { serverResponse } from '../entity/common/response';
import { CommonService } from '../shared/service/common.service';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.css']
})
export class UpdateAppointmentComponent implements OnInit {

  successMessage:string="";
  updateForm!:FormGroup
  constructor(private fb:FormBuilder, private common: CommonService,
    private SpinnerService: NgxSpinnerService,
    private route: Router ) {}

    ngOnInit(): void {
      this.updateForm=this.fb.group({
        CustomerName:["",[Validators.required]],
        DateofAppointment:["",Validators.required]
  
  
      })
    }

    UpdateAppointment(){
      
    }

}
