import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyComponent } from './privacy/privacy.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[PrivacyComponent]
})
export class SharedModule { }
