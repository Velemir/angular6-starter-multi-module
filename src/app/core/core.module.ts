import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuardService } from './services/auth-guard.service';
import {PublicModule} from '../public/public.module';

@NgModule({
    imports: [
        CommonModule,
        PublicModule,
        CoreRoutingModule
    ],
    declarations: [HeaderComponent],
    exports: [
        RouterModule,
        HeaderComponent
    ],
    providers: [
        AuthenticationService,
        AuthGuardService
    ]
})
export class CoreModule { }
