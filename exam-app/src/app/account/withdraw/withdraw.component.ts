import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent {

  amount: number=0

  constructor(private dialogRef: MatDialogRef<WithdrawComponent>) { }

  ngOnInit(): void {
  }

  onFinishClick(): void {
    this.dialogRef.close(this.amount);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

}