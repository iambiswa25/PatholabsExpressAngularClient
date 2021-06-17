import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { serverResponse } from '../entity/common/response';
import { CommonService } from '../shared/service/common.service';

@Component({
  selector: 'app-view-tests',
  templateUrl: './view-tests.component.html',
  styleUrls: ['./view-tests.component.css']
})
export class ViewTestsComponent implements OnInit {

  constructor(private common: CommonService,
    private SpinnerService: NgxSpinnerService) { }
  tests:any;
  ngOnInit(): void {
    this.getAllTestDetails();

  }

  getAllTestDetails()
  {
    this.SpinnerService.show();
    this.common.getAllTestItem().subscribe((res: serverResponse) => {
      if (res.Success == true) {
       this.tests = res.Result;
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

  bookTest(){
   
  }

}
