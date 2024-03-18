import { Component } from '@angular/core';
import { PolicyService } from 'src/app/shared/privacy/policy.service';
import { PrivacyComponent } from 'src/app/shared/privacy/privacy.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[PolicyService]
})
export class LoginComponent {

  isRender:boolean=false
  constructor(private privacy:PolicyService){}
    onClick(){
     this.privacy.changeStatus()
     this.isRender=this.privacy.shouldAppear
     console.log(this.isRender);
     
     
    }
}
