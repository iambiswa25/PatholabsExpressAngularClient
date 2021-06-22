import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validator, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { serverResponse } from '../entity/common/response';
import { CommonService } from '../shared/service/common.service';


@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {

  successMessage:string="";
  addForm!:FormGroup

  constructor(private fb:FormBuilder, private common: CommonService,
    private SpinnerService: NgxSpinnerService,
    private route: Router) { }

  ngOnInit(): void {
    this.addForm=this.fb.group({
      TestName:["",[Validators.required]],
      TestPrice:["",Validators.required]
    })

}
addTest()
{
  this.SpinnerService.show();
  // Object.assign(this.loginDto, this.loginForm.value);
  //  this.loginDto.UserType = enUserType.Admin;
  this.common.addTest(this.addForm.value).subscribe((res: serverResponse) => {
    if (res.Success == true) {
      //add rounting
      window.alert("New test added successfully.")
      this.addForm.setValue({TestName:"",TestPrice:""})
    }
    else{
      alert("Failed");
    }
  },
    (err) => {
      this.SpinnerService.hide();
    }, () => {
      this.SpinnerService.hide();
    });
}
}