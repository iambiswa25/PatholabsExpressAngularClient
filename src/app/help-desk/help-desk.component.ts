import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { serverResponse } from '../entity/common/response';
import { HelpDeskDto } from '../entity/HelpDesk';
import { CommonService } from '../shared/service/common.service';

@Component({
  selector: 'app-help-desk',
  templateUrl: './help-desk.component.html',
  styleUrls: ['./help-desk.component.css']
})
export class HelpDeskComponent implements OnInit {

  successMessage: string = ""

  helpForm!: FormGroup


  constructor(private fb: FormBuilder,
    private common: CommonService,
    private SpinnerService: NgxSpinnerService) { }
  feedData: HelpDeskDto = new HelpDeskDto();


    ngOnInit(): void {
      this.helpForm = this.fb.group({
        email: ['', [Validators.required]],
        issue: ['', [Validators.required]]
        
  
      })
    }
    submit(){
      
    }

}
