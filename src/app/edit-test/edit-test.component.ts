import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-test',
  templateUrl: './edit-test.component.html',
  styleUrls: ['./edit-test.component.css']
})
export class EditTestComponent implements OnInit {

  successMessage:string="";
  editform!:FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.editform=this.fb.group({
      TestId:["",[Validators.required]],
      TestName:["",Validators.required],
      TestPrice:["",Validators.required]
  })
 
}}