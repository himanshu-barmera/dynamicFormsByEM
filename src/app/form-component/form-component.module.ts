import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCompComponent } from './form-comp.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        FormCompComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        FormCompComponent
    ]
})
export class FormComponentModule { }
