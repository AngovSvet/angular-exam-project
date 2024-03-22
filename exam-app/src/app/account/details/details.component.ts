import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../account.service';
import { User } from 'src/app/types/user';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  account:any


  constructor(private aRoute:ActivatedRoute,private accService:AccountService, private router:Router){}
  

  ngOnInit(): void {
    this.aRoute.params.subscribe({
      next:(value)=>this.accService.getAccDetails(value['accountId']).subscribe({
        next:(value)=>this.account=value
        
      })
    })
  }

  onDelete(id:string){
    this.accService.deleteAcc(id).subscribe({
      next:(user:any)=>this.router.navigate([`/user/${user._id}`])
      
    })
  }
  
}
