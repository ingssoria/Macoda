import {routes} from "./app.routes";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ContactService } from "./contact/contact.service";


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHomebannerComponent } from './dashboard/dashboard-homebanner/dashboard-homebanner.component';
import { DashboardBannerComponent } from './dashboard/dashboard-banner/dashboard-banner.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardSlide1Component } from './dashboard/dashboard-slide1/dashboard-slide1.component';
import { DashboardSlide2Component } from './dashboard/dashboard-slide2/dashboard-slide2.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    DashboardHomebannerComponent,
    DashboardBannerComponent,
    FooterComponent,
    AboutusComponent,
    ServicesComponent,
    ContactComponent,
    DashboardSlide1Component,
    DashboardSlide2Component
  ],
  imports: [
      routes,
      BrowserModule,
      FormsModule,
      HttpClientModule
  ],
  providers: [
      ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
