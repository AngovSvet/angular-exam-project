import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-deposit-withdraw',
  templateUrl: './deposit-withdraw.component.html',
  styleUrls: ['./deposit-withdraw.component.css']
})
export class DepositComponent {

  amount: number=0

  constructor(private dialogRef: MatDialogRef<DepositComponent>) { }

  ngOnInit(): void {
  }

  onFinishClick(): void {
    this.dialogRef.close(this.amount);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
