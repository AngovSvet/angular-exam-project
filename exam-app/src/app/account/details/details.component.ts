import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../account.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  account:any


  constructor(private aRoute:ActivatedRoute,private accService:AccountService){}
  

  ngOnInit(): void {
    this.aRoute.params.subscribe({
      next:(value)=>this.accService.getAccDetails(value['accountId']).subscribe({
        next:(value)=>this.account=value
        
        
      })
      
    })
  }
  
}
