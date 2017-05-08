import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./sign-up/sign-up.component";


@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        LoginComponent,
        SignUpComponent
    ]
})
export class AdminModule { }
