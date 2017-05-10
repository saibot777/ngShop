import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {AdminMenuComponent} from "./adminMenu/admin-menu.component";
import {AdminComponent} from "./adminComponent/admin.component";
import {UserService} from "./adminShared/user.service";
import {BlogAdminService} from "./adminShared/blog-admin.service";

const AdminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignUpComponent },
            { path: '', component: AdminMenuComponent, canActivate: [UserService] }
        ]
    }
];


@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forChild(AdminRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
      RouterModule
    ],
    declarations: [
        LoginComponent,
        SignUpComponent,
        AdminMenuComponent,
        AdminComponent
    ],
    providers: [
        UserService,
        BlogAdminService
    ]
})
export class AdminModule { }
