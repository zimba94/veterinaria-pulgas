import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { LandingComponent } from './landing/landing.component';
import { CitasComponent } from './citas/citas.component';

const routes: Routes = [
    { 
        path: '', 
        component: PagesComponent,
        children: [
          { path: 'home', component: LandingComponent},
          { path: 'citas', component: CitasComponent},
          {path: '', redirectTo: '/home', pathMatch: 'full'},
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
