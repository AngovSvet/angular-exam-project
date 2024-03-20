import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMAIL_DOMAINS } from 'src/app/constants/domainConst';
import { PolicyService } from 'src/app/shared/privacy/policy.service';
import { emailValidator } from 'src/app/utils/emailValidator';
import { passwordValidator } from 'src/app/utils/pass-Validator';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[PolicyService]
})
export class RegisterComponent{
  isRendered:boolean|undefined

  constructor(private privacy:PolicyService, private fb:FormBuilder, private router:Router, private userService:UserService){}

    form=this.fb.group({
      username:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,emailValidator(EMAIL_DOMAINS)]],
      passwordGr:this.fb.group({
        password:['',[Validators.required,Validators.minLength(8)]],
        repeatPassword:['']
      },
      {
        validators:[passwordValidator("password","repeatPassword")]
      })
    })
    onClick(){
     this.privacy.changeStatus()
     this.isRendered=this.privacy.shouldAppear
     console.log(this.isRendered);
     
    }

    onSubmit(regForm:FormGroup){
      console.log(regForm.value);

      const username = regForm.value.username;
      const email= regForm.value.email;
      const password= regForm.value.passwordGr.password
      const repeatPassword= regForm.value.passwordGr.repeatPassword

      
      this.userService.register(username,email,password,repeatPassword).subscribe({
        next:()=>this.router.navigate(['/home']),
        error:(err)=>console.log(err)
        
      })
    }
}
