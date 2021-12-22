import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';

import { GreetEmpComponent } from './greet-emp/greet-emp.component';

import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';

import { SearchComponent } from './search/search.component';
import { UpdateComponent } from './update/update.component';



const routes: Routes = [
  {
    path:"registerEmp",
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  
  {
    path:'allemps',
    component:GreetEmpComponent
  },
  {
    path:'search',
    component:SearchComponent
  },
  {
    path:'update',
    component:UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
