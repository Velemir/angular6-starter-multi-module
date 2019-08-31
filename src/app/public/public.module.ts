import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login/login.component';
import {NotFoundComponent} from './not-found/not-found.component';

const exportedDeclarations = [
  LoginComponent,
  NotFoundComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...exportedDeclarations],
  exports: [...exportedDeclarations]
})
export class PublicModule { }
