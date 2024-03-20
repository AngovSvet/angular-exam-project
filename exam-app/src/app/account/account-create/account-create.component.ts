import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent {

  constructor(private fb:FormBuilder){}

  form=this.fb.group({
    accType:['', [Validators.required]],
    currency:['',[Validators.required]],
    deposit:['', [Validators.required, Validators.min(100)]]
  })

  onSubmit(formAcc:FormGroup){
    console.log(formAcc);
    
  }

}
