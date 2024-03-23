import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { emailValidator } from '../utils/emailValidator';
import { EMAIL_DOMAINS } from '../constants/domainConst';
import { Router } from '@angular/router';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{

  render:boolean =false

  constructor(private fb: FormBuilder, private messageSurvice:ContactService){}

  form = this.fb.group({
    name:['', [Validators.required]],
    email:['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    message:['', [Validators.required, Validators.minLength(10)]]
  })


  onSubmit(form:FormGroup){
    const {name,email,message} = form.value
    this.messageSurvice.sendReview(name,email,message).subscribe({
      next:()=>this.render=true
    })
  }
}
