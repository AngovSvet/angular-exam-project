import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WholePrivacyComponent } from './whole-privacy/whole-privacy.component';

const routes: Routes = [{path:"privacy", component:WholePrivacyComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
