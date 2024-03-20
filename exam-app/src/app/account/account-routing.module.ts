import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountCreateComponent } from "./account-create/account-create.component";
import { DetailsComponent } from "./details/details.component";

const routes:Routes=[
    {path:"createAccount", component:AccountCreateComponent},
    {path:"details", component:DetailsComponent}
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AccountRoutingModule { }