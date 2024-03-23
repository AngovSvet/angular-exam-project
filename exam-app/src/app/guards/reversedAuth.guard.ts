
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { Injectable, inject } from '@angular/core';

@Injectable({providedIn:'root'})

export class ReversedAuthGuard{

  constructor(private userService:UserService){}

  canActivate():boolean{

    if (this.userService.isLogged) {
      return true
    } else {
      return false
    }
  }
}

export const reversedAuthGuard:CanActivateFn = (route,state)=>{
  return inject(ReversedAuthGuard).canActivate() ? inject(Router).navigate(['/home']):true
}