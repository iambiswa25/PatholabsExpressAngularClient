import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { serverResponse } from '../entity/common/response';
import { FeedbackDto } from '../entity/Feedback';
import { CommonService } from '../shared/service/common.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  successMessage: string = ""

  feedForm!: FormGroup


  constructor(private fb: FormBuilder,
    private common: CommonService,
    private SpinnerService: NgxSpinnerService) { }
  feedData: FeedbackDto = new FeedbackDto();


    ngOnInit(): void {
      this.feedForm = this.fb.group({
        feedback: ['', [Validators.required]],
        
  
      })
    }
    submit(){
      
    }

}
