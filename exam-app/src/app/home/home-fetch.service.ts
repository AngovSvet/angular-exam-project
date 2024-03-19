import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from '../types/reviewType';

@Injectable({
  providedIn: 'root'
})
export class HomeFetchService {

  constructor(private http:HttpClient) { }

  getReviews(){
    const url = 'http://localhost:3000/reviews';
    return this.http.get<Review[]>(url);
  }
}
