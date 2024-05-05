import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CitasComponent } from './citas/citas.component';
import { LandingComponent } from './landing/landing.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CitasComponent,
    LandingComponent,
    PagesComponent
  ],
  exports:[
    CitasComponent,
    LandingComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
