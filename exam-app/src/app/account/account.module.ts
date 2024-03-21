import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountCreateComponent } from './account-create/account-create.component';
import { RouterModule } from '@angular/router';
import { AccountRoutingModule } from './account-routing.module';
import { DetailsComponent } from './details/details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AccountCreateComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AccountModule { }
