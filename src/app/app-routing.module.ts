import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { DepartmentComponent } from './department/department.component';
import { DepartmentidComponent } from './departmentid/departmentid.component';
import { DepartmentnameComponent } from './departmentname/departmentname.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent
  },
  {
    path: 'Login',
    component: LoginComponent
  },

  {
    path: 'Register',
    component: RegisterComponent
  },
  {
    // Here Child Component
    path: 'Department',
    component: DepartmentComponent,
      children:[
        {
          path: 'DepId',
          component: DepartmentidComponent
        },
        {
          path: 'DepName',
          component: DepartmentnameComponent
        }
      ]
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
