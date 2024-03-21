import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent {

  constructor(private fb:FormBuilder, private accountService:AccountService,private router:Router){}

  form=this.fb.group({
    accType:['', [Validators.required]],
    currency:['',[Validators.required]],
    deposit:['', [Validators.required, Validators.min(100)]]
  })

  onSubmit(formAcc:FormGroup){
    const {accType,currency,deposit}= formAcc.value;
    this.accountService.createAcc(accType,currency,deposit).subscribe({
      next:()=>this.router.navigate(["/home"])
    })
    console.log(formAcc);
    
  }

}
