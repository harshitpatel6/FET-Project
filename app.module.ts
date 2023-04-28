import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BirthCertificateComponent } from './birth-certificate/birth-certificate.component';
import { DeathCertificateComponent } from './death-certificate/death-certificate.component';
import { MarriageCertificateComponent } from './marriage-certificate/marriage-certificate.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BirthCertificateComponent,
    DeathCertificateComponent,
    MarriageCertificateComponent,
    LoginComponent,
    NewsComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
