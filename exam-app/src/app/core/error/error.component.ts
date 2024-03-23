import { Component, OnInit } from '@angular/core';
import { ErrorService } from './error.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorsComponent implements OnInit {

  errorMessage:string=''

  get isLogged(){
    return this.userService.isLogged
  }

  constructor(private errorService:ErrorService, private userService:UserService){}

  
  ngOnInit(): void {
    this.errorService.error$.subscribe({
      next:(value:any)=>this.errorMessage=value?.error['error']  
    })

  }

}
