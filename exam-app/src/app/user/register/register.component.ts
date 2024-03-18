import { Component, OnInit } from '@angular/core';
import { PolicyService } from 'src/app/shared/privacy/policy.service';
import { PrivacyComponent } from 'src/app/shared/privacy/privacy.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[PolicyService]
})
export class RegisterComponent{
  isRendered:boolean|undefined

  constructor(private privacy:PolicyService){}
    onClick(){
     this.privacy.changeStatus()
     this.isRendered=this.privacy.shouldAppear
     console.log(this.isRendered);
     
    }
}
