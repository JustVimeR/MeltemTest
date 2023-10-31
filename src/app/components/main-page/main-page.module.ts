import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MainPageComponent } from './main-page.component';
import { MainPageWindowComponent } from './main-page-window/main-page-window.component';

@NgModule({
  declarations: [
    MainPageComponent,
    MainPageWindowComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class MainPageModule { }
