import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboarRoutingModule } from './modules/dashboard/dashboard-routing.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {enableTracing:false,useHash:true}
    ),
    DashboarRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
