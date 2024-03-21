import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WholePrivacyComponent } from './whole-privacy/whole-privacy.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './404/404.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AccountModule } from './account/account.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { OffersComponent } from './offers/offers.component';
import { appInterceptorProvider } from './app.interceptor';
import { AuthenticatingComponent } from './authenticating/authenticating.component';

@NgModule({
  declarations: [
    AppComponent,
    WholePrivacyComponent,
    HomeComponent,
    ErrorComponent,
    AboutComponent,
    ContactComponent,
    OffersComponent,
    AuthenticatingComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AccountModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
