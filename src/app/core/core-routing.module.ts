import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../public/not-found/not-found.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from '../public/login/login.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'form',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'admin',
        canActivate: [AuthGuardService],
        loadChildren: '../admin/admin.module#AdminModule'
    },
    {
        path: 'form',
        loadChildren: '../form/form.module#FormModule'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
