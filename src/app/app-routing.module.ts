import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./admin/pages/login/login.component";
import {RegisterComponent} from "./admin/pages/register/register.component";

const routes: Routes = [
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : '',
    component : RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
