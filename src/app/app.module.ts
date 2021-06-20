import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {HttpClientModule} from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './home-page/footer/footer.component';
import { HeaderComponent } from './home-page/header/header.component';
import { MainComponent } from './home-page/main/main.component';
import { ViewTestsComponent } from './view-tests/view-tests.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { AddTestComponent } from './add-test/add-test.component';
import { EditTestComponent } from './edit-test/edit-test.component';
import { NgxSpinnerModule } from "ngx-spinner";  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Error404Component } from './error404/error404.component';
import { AdminRegdComponent } from './admin-regd/admin-regd.component';
import { BookedAppointmentComponent } from './booked-appointment/booked-appointment.component';
import { UpdateUserDetailsComponent } from './update-user-details/update-user-details.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomePageComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    ViewTestsComponent,
    BookingFormComponent,
    AddTestComponent,
    EditTestComponent,
    Error404Component,
    AdminRegdComponent,
    BookedAppointmentComponent,
    UpdateAppointmentComponent,
    UpdateUserDetailsComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
