import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyComponent } from './privacy/privacy.component';
import { RouterModule } from '@angular/router';
import { PopUpComponent } from './pop-up/pop-up.component';



@NgModule({
  declarations: [
    PrivacyComponent,
    PopUpComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[PrivacyComponent, PopUpComponent]
})
export class SharedModule { }
