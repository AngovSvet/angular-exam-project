import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../account.service';
import { User } from 'src/app/types/user';
import { MatDialog } from '@angular/material/dialog';
import { DepositComponent } from '../deposit-withdraw/deposit-withdraw.component';
import { WithdrawComponent } from '../withdraw/withdraw.component';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  account:any


  constructor(private aRoute:ActivatedRoute,private accService:AccountService, private router:Router,private dialogDep:MatDialog){}
  

  ngOnInit(): void {
    this.aRoute.params.subscribe({
      next:(value)=>this.accService.getAccDetails(value['accountId']).subscribe({
        next:(value)=>this.account=value
        
      })
    })
  }

  openWithdrawPopup(id:string): void {
    const dialogRef = this.dialogDep.open(WithdrawComponent, {
      width: '250px',
      disableClose:false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.accService.withdraw(id,result).subscribe({
          next:(value:any)=>this.router.navigate([`/user/${value.owner}`]),
          error:(err)=>console.log(err.error)
          
          
          
        })
      } else {
        console.log('Transaction canceled');
      }
    });
  }

  openDepositPopup(id:string): void {
    const dialogRef = this.dialogDep.open(DepositComponent, {
      width: '250px',
      disableClose:false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.accService.deposit(id,result).subscribe({
          next:(value:any)=>this.router.navigate([`/user/${value.owner}`]),
          
          
          
        })
      } else {
        console.log('Transaction canceled');
      }
    });
  }


  onDelete(id:string){
    this.accService.deleteAcc(id).subscribe({
      next:(user:any)=>this.router.navigate([`/user/${user._id}`])
      
    })
  }
  
}
