import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewTestsComponent } from './view-tests/view-tests.component';

const routes: Routes = [
  { path:"" , component:HomePageComponent},
  { path:"Home" , component:HomePageComponent},
  { path:"ViewTestandPricing" , component:ViewTestsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
