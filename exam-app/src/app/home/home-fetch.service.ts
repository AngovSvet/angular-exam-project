import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from '../types/reviewType';

@Injectable({
  providedIn: 'root'
})
export class HomeFetchService {

  constructor(private http:HttpClient) { }

  getReviews(){
    return this.http.get<Review[]>('reviews');
  }
}
