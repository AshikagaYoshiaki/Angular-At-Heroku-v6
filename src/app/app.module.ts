import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from './material/material.component';

import {RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormControlComponent } from './form-control/form-control.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatRadioModule } from '@angular/material/radio'

import { MatSelectModule } from '@angular/material/select'
import { MatSliderModule } from '@angular/material/slider'

import { MatNativeDateModule } from '@angular/material/core'
import { MatDatepickerModule } from '@angular/material/datepicker'


export const routes: Routes = [
  {path:'hello', component: HelloComponent},
  {path:'material', component: MaterialComponent},
  {path:'formcontrol', component: FormControlComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    MaterialComponent,
    FormControlComponent
  ],
  imports: [
    BrowserModule,
//    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,

    MatSelectModule,
    MatSliderModule,
    MatNativeDateModule,
    MatDatepickerModule,

    RouterModule.forRoot(routes,{enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
