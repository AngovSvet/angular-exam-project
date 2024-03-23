import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }

  calculateMonthsToGoal(targetAmount: number, monthlyContribution: number, interestRate: number): number {
    const monthlyInterestRate = interestRate / 100 / 12;
    const numerator = Math.log((targetAmount / monthlyContribution * monthlyInterestRate) + 1);
    const denominator = Math.log(1 + monthlyInterestRate);
    return Math.ceil(numerator / denominator);
  }
}
