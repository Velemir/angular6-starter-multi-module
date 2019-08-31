import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequiredLabelDirective } from './directives/required-label.directive';

const exportedDeclarations = [
  RequiredLabelDirective
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [...exportedDeclarations],
    exports: [
      ...exportedDeclarations
    ]
})
export class SharedModule { }
