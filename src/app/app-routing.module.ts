import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTestComponent } from './add-test/add-test.component';
import { AdminRegdComponent } from './admin-regd/admin-regd.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { EditTestComponent } from './edit-test/edit-test.component';
import { Error404Component } from './error404/error404.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewTestsComponent } from './view-tests/view-tests.component';
import { BookedAppointmentComponent } from './booked-appointment/booked-appointment.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { UpdateUserDetailsComponent } from './update-user-details/update-user-details.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';
import { HelpDeskComponent } from './help-desk/help-desk.component';

const routes: Routes = [
   {path:'',redirectTo:'home', pathMatch: 'full' },
  { path:"home" , component:HomePageComponent},
  { path:"viewtestandpricing" , component:ViewTestsComponent},
  { path:"login" , component:LoginComponent},
  { path:"register" , component:RegistrationComponent},
  { path:"adminregister" , component:AdminRegdComponent,},
  { path:"bookingappointment" , component:BookingFormComponent},
  { path:"addtest" , component:AddTestComponent},
  { path:"edittest" , component:EditTestComponent},
  { path:"viewtest" , component:ViewTestsComponent},
  { path:"bookedappointment" , component:BookedAppointmentComponent},
  { path:"feedback", component:FeedbackComponent},
  { path:"viewappointment", component:ViewAppointmentComponent},
  { path:"updateuserdetail", component:UpdateUserDetailsComponent},
  { path:"updateappointmentdetail", component:UpdateAppointmentComponent},
  { path:"helpdesk", component:HelpDeskComponent},
  
  {
    path: "404",
    component: Error404Component
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true,
    onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
