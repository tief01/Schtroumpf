import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { InformationsComponent } from './informations/informations.component';
import { FormsModule } from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription.component';
import { HttpClientModule } from '@angular/common/http';
import { SvgComponent } from './svg/svg.component';
import { SvgBtnComponent } from './svg-btn/svg-btn.component'
@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    InformationsComponent,
    InscriptionComponent,
    SvgComponent,
    SvgBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
