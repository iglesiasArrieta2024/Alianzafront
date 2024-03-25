import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboradComponent } from './pages/dashborad.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ClienteModule } from '../clientes/cliente.module';



@NgModule({
  declarations: [
    DashboradComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ClienteModule
  ]
})
export class DashboardModule { }
