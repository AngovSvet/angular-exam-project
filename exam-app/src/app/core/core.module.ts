import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ResponsiveDirective } from './responsive.directive';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ResponsiveDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[HeaderComponent,FooterComponent]
})
export class CoreModule { }
