import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './components/booking/booking.component';
import { DestinationComponent } from './components/destination/destination.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ServiceComponent } from './components/service/service.component';
import { SignComponent } from './components/sign/sign.component';
import { BookingPropositionsComponent } from './components/booking-propositions/booking-propositions.component';
import { LogComponent } from './components/log/log.component';


const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "destination", component: DestinationComponent},
  {path: "booking", component: BookingComponent},
  {path: "service", component: ServiceComponent},
  {path: "signUp", component: SignComponent},
  {path: "login", component: LoginComponent},
  {path: "propositions", component: BookingPropositionsComponent},
  {path: "logIn", component: LogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
