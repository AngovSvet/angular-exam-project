import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WholePrivacyComponent } from './whole-privacy/whole-privacy.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './404/404.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:"privacy", component:WholePrivacyComponent},
  {path:"",pathMatch:"full", redirectTo:"/home"},
  {path:"home", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"**", redirectTo:"/404"},
  {path:"404", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
