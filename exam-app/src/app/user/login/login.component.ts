import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PolicyService } from 'src/app/shared/privacy/policy.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[PolicyService]
})
export class LoginComponent {

  isRender:boolean=false
  constructor(private privacy:PolicyService, private fb:FormBuilder){}

    form = this.fb.group({
      username:['',[Validators.required,Validators.minLength(3)]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
    onClick(){
     this.privacy.changeStatus()
     this.isRender=this.privacy.shouldAppear
     console.log(this.isRender);
     
    }

    onSubmit(logForm:FormGroup){
      console.log(logForm);
      
      
    }
}
