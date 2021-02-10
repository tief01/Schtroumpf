import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component'
import { InformationsComponent } from './informations/informations.component'
import { InscriptionComponent } from './inscription/inscription.component';


const routes: Routes = [
  { path: '', component: AuthentificationComponent},
  { path: 'Schtroumpf/:id', component: InformationsComponent},
  { path: 'inscription', component: InscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
