import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ResponsiveDirective } from './core/responsive.directive';
import { UserModule } from './user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WholePrivacyComponent } from './whole-privacy/whole-privacy.component';

@NgModule({
  declarations: [
    AppComponent,
    WholePrivacyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
