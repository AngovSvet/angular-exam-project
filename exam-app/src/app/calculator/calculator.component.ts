import { Component, OnInit } from '@angular/core';
import { CalcService } from './calc.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  targetAmount: number =0
  monthlyContribution: number =0
  interestRate: number =0
  estimatedMonths: number =0

  constructor(private calculatorService: CalcService) { }

  ngOnInit(): void {
  }

  calculate(): void {
    this.estimatedMonths = this.calculatorService.calculateMonthsToGoal(this.targetAmount, this.monthlyContribution, this.interestRate);
  }
}
