import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AdminRoutingModule } from './admin/admin.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SecretariaRoutingModule } from './secretaria/secretaria.routing';



const routes: Routes=[
  {path:'**', component:NopagefoundComponent},
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AdminRoutingModule,
    SecretariaRoutingModule,
    AuthRoutingModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
