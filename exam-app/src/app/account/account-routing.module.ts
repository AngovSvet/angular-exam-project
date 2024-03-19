import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountCreateComponent } from "./account-create/account-create.component";

const routes:Routes=[
    {path:"createAccount", component:AccountCreateComponent}
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AccountRoutingModule { }