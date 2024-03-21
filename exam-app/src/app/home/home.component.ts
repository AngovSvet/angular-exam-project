import { Component, OnInit } from '@angular/core';
import { HomeFetchService } from './home-fetch.service';
import { Review } from '../types/reviewType';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  get isLogged(){
    return this.userService.isLogged
  }

  reviews:Review[]=[]

  constructor(private homeFetch:HomeFetchService, private userService:UserService){}

  ngOnInit(): void {
    this.homeFetch.getReviews().subscribe({
      next: (data)=> this.reviews=data
      
      
    })
  }
}
