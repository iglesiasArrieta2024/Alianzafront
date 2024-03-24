import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard.module';
import { DashboradComponent } from './pages/dashborad.component';

export const routes: Routes = [
    {
        path: 'dashboard', 
        component: DashboradComponent,
        loadChildren: () => import('./router-child.module').then(m => m.RouterchlidModule)
    },
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    
})
export class DashboarRoutingModule { }
