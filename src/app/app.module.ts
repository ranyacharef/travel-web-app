import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BookingComponent } from './components/booking/booking.component';
import { DestinationComponent } from './components/destination/destination.component';
import { ServiceComponent } from './components/service/service.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignComponent } from './components/sign/sign.component';
import { LoginComponent } from './components/login/login.component';
import { BookingPropositionsComponent } from './components/booking-propositions/booking-propositions.component';
import { LogComponent } from './components/log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookingComponent,
    DestinationComponent,
    ServiceComponent,
    NavBarComponent,
    FooterComponent,
    SignComponent,
    LoginComponent,
    BookingPropositionsComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
