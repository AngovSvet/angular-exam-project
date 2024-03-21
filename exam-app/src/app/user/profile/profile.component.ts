import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  wantsToEdit=false

  constructor(private userService:UserService,private activRoute:ActivatedRoute){}

  userProfile:any

  ngOnInit(): void {

    this.activRoute.params.subscribe({
      next:(value)=>this.userService.getProfile().subscribe({
        next:(profile)=>this.userProfile=profile
        
      })
      
    })
    
    
  }
  
}
