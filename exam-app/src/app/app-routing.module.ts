import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WholePrivacyComponent } from './whole-privacy/whole-privacy.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"privacy", component:WholePrivacyComponent},
  {path:"",pathMatch:"full", redirectTo:"/home"},
  {path:"home", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
