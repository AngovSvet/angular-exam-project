import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offer } from '../types/offers';

@Injectable({
  providedIn: 'root'
})
export class OfferFetchService {

  constructor(private http:HttpClient) { }

  getOffers(){
    return this.http.get<Offer[]>('http://localhost:3000/offer')
  }
}
