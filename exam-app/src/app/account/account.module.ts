import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountCreateComponent } from './account-create/account-create.component';
import { RouterModule } from '@angular/router';
import { AccountRoutingModule } from './account-routing.module';



@NgModule({
  declarations: [
    AccountCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
