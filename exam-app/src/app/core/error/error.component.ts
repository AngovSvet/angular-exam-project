import { Component, OnInit } from '@angular/core';
import { ErrorService } from './error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorsComponent implements OnInit {

  errorMessage:string=''

  constructor(private errorService:ErrorService){}

  
  ngOnInit(): void {
    this.errorService.error$.subscribe({
      next:(value:any)=>this.errorMessage=value?.error['error']  
    })

  }

}
