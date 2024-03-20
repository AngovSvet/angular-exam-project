import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ResponsiveDirective } from './core/responsive.directive';
import { UserModule } from './user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WholePrivacyComponent } from './whole-privacy/whole-privacy.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './404/404.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AccountModule } from './account/account.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PopUpComponent } from './shared/pop-up/pop-up.component';
import { SharedModule } from './shared/shared.module';
import { OffersComponent } from './offers/offers.component';

@NgModule({
  declarations: [
    AppComponent,
    WholePrivacyComponent,
    HomeComponent,
    ErrorComponent,
    AboutComponent,
    ContactComponent,
    OffersComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    UserModule,
    AccountModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
