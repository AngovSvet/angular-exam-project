import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ResponsiveDirective } from './responsive.directive';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ErrorsComponent } from './error/error.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ResponsiveDirective,
    ErrorsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[HeaderComponent,FooterComponent]
})
export class CoreModule { }
