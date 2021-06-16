import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validator, Validators} from "@angular/forms";


@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {

  successMessage:string="";
  addForm!:FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.addForm=this.fb.group({
      TestName:["",[Validators.required]],
      TestPrice:["",Validators.required]
    })

}
addTest()
{
  console.log("from add component");
}
}