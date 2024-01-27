import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './teste/login/login.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  {
    path: "login", component: LoginComponent
  },
  {
    path: "", component: PrincipalComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
