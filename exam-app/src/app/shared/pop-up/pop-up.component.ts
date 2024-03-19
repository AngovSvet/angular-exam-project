import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})

export class PopUpComponent {
  shouldRender:boolean=true
  @ViewChild('wrapperDiv') element:ElementRef<HTMLElement>|undefined

  constructor(private router:Router){}
  close(){
    this.shouldRender=false
    this.router.navigate(['/home'])
  }
}
