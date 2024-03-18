import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ResponsiveDirective } from './responsive.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ResponsiveDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent,FooterComponent]
})
export class CoreModule { }
