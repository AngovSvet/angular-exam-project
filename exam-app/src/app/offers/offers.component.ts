import { Component } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {
  offers: any[] = [
    { title: 'Special Mortgage Offer', description: 'Get a low-interest mortgage with flexible repayment options.' },
    { title: 'Credit Card Rewards Program', description: 'Earn rewards points for every purchase with our credit card.' },
    { title: 'Student Banking Package', description: 'Exclusive banking benefits for students.' }
  ];
}
