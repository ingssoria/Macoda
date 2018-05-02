
import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AboutusComponent} from "./aboutus/aboutus.component";
import {ServicesComponent} from "./services/services.component";
import {ContactComponent} from "./contact/contact.component";

const  appRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '' }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
