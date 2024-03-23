
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { Injectable, inject } from '@angular/core';

@Injectable({providedIn:'root'})

export class AuthGuard{

  constructor(private userService:UserService){}

  canActivate():boolean{

    if (this.userService.isLogged) {
      return true
    } else {
      return false
    }
  }
}

export const authGuard:CanActivateFn = (route,state)=>{
  return inject(AuthGuard).canActivate() ? true : inject(Router).navigate(['/user/login'])
}


