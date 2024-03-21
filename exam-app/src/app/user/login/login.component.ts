import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PolicyService } from 'src/app/shared/privacy/policy.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[PolicyService]
})
export class LoginComponent {

  isRender:boolean=false
  constructor(private privacy:PolicyService, private fb:FormBuilder, private userService:UserService, private router:Router){}

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
      const {username, password} = logForm.value

      this.userService.login(username,password).subscribe({
        next:()=>this.router.navigate(['/home']),
        error:(err)=>console.log(err)
        
      })
      
    }
}
