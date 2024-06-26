import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WholePrivacyComponent } from './whole-privacy/whole-privacy.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './404/404.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorsComponent } from './core/error/error.component';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  {path:"privacy", component:WholePrivacyComponent},
  {path:"",pathMatch:"full", redirectTo:"/home"},
  {path:"home", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"review",component:ContactComponent},
  {path:"calculator",component:CalculatorComponent},
  {path:"user", loadChildren:()=> import ('./user/user.module').then((m)=>m.UserModule)},
  {path:"account", loadChildren:()=> import ('./account/account.module').then((m)=>m.AccountModule)},
  {path:'error',component:ErrorsComponent},
  {path:"**", redirectTo:"/404"},
  {path:"404", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
