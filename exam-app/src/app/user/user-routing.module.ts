import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { reversedAuthGuard} from '../guards/reversedAuth.guard';
import { authGuard } from '../guards/auth.guard';

const routes: Routes = [
  {path:"login",component:LoginComponent, canActivate:[reversedAuthGuard]},
  {path:"register", component:RegisterComponent,canActivate:[reversedAuthGuard]},
  {path:":userId", component:ProfileComponent, canActivate:[authGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }