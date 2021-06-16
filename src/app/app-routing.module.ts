import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ViewTestsComponent } from './view-tests/view-tests.component';

const routes: Routes = [
  { path:"" , component:HomePageComponent},
  { path:"home" , component:HomePageComponent},
  { path:"viewtestandpricing" , component:ViewTestsComponent},
  { path:"login" , component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
