import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountCreateComponent } from "./account-create/account-create.component";
import { DetailsComponent } from "./details/details.component";
import { authGuard } from "../guards/auth.guard";

const routes:Routes=[
    {path:"createAccount", component:AccountCreateComponent, canActivate:[authGuard]},
    {path:":accountId", component:DetailsComponent, canActivate:[authGuard]}
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AccountRoutingModule { }