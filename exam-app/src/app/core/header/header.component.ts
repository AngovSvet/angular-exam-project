import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(private userService:UserService, private router:Router){
  }

  get isLogged(){
    return this.userService.isLogged
  }

  get username(){
    return this.userService.user?.username
  }

  get userId(){
    return this.userService.user?._id
  }


  logOut(){
    
    this.userService.logOut().subscribe({
      next:()=> this.router.navigate(['/home']),
      error:(err)=>console.log(err)
      
    })
  }

}
