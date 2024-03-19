import { Component, OnInit } from '@angular/core';
import { HomeFetchService } from './home-fetch.service';
import { Review } from '../types/reviewType';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  reviews:Review[]=[]

  constructor(private homeFetch:HomeFetchService){}

  ngOnInit(): void {
    this.homeFetch.getReviews().subscribe({
      next: (data)=> this.reviews=data
      
      
    })
  }
}
