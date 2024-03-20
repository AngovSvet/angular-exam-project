import { Component, OnInit } from '@angular/core';
import { Offer } from '../types/offers';
import { HttpClient } from '@angular/common/http';
import { OfferFetchService } from './offer-fetch.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit{
  offers: Offer[] = [];

  constructor(private offerService:OfferFetchService){}

  ngOnInit(): void {
    this.offerService.getOffers().subscribe({
      next:(data)=> this.offers=data
    })
  }
}
