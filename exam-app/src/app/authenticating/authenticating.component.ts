import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-authenticating',
  templateUrl: './authenticating.component.html',
  styleUrls: ['./authenticating.component.css']
})
export class AuthenticatingComponent implements OnInit{

  isAuthenticating=true

  constructor(private userService:UserService){}

  ngOnInit(): void {
    this.userService.getProfile().subscribe({
      next:()=>{this.isAuthenticating=false},
      error:()=>{this.isAuthenticating=false},
      complete:()=>{this.isAuthenticating=false}
    })
  }

}
