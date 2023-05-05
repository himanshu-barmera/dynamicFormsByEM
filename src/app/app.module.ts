import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponentModule } from './form-component/form-component.module';

@NgModule({
    declarations: [
        AppComponent,
        CompAComponent,
        CompBComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        FormComponentModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
