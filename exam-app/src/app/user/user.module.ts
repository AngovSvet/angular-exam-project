import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports:[LoginComponent, RegisterComponent]
})
export class UserModule { }
