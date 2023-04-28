import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BirthCertificateComponent } from './birth-certificate/birth-certificate.component';
import { DeathCertificateComponent } from './death-certificate/death-certificate.component';
import { MarriageCertificateComponent } from './marriage-certificate/marriage-certificate.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'birth-certificate', component: BirthCertificateComponent },
  { path: 'death-certificate', component: DeathCertificateComponent },
  { path: 'marriage-certificate', component: MarriageCertificateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contact', component: ContactComponent }, // add route for contact component
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
