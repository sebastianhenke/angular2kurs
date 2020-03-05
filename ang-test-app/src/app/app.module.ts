import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { AnotherComponent } from './another/another.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertyBindingComponent } from './databinding/property-binding/property-binding.component';
import { EventBindingComponent } from './databinding/event-binding/event-binding.component';
import { MarkierungDirective } from './markierung.directive';
import { EigenesIfDirective } from './eigenes-if.directive';
import {CmpAComponent} from "./service/cmp-a.component";
import {ServiceComponent} from "./service/service.component";
import {CmpBComponent} from "./service/cmp-b.component";
import {LogService} from "./service/log.service";
import {UserEditComponent} from "./user/user-edit.component";
import {UserDetailComponent} from "./user/user-detail.component";
import {UserComponent} from "./user/user.component";
import {HomeComponent} from './home/home.component';
import {meinRouting} from "./app.routing.module";
import {UserDetailGuard} from "./user/user-detail.guard";
import {UserService} from "./user/user.service";
import {UserEditGuard} from "./user/user-edit.guard";
import {TemplateDrivenComponent} from './formulare/template-driven.component';
import {ReactiveComponent} from './formulare/reactive.component';
import { PipesComponent } from './pipes/pipes.component';
import { MultipliPipe } from './pipes/multipli.pipe';
import { MeinfilterPipe } from './pipes/meinfilter.pipe';
import { HttpComponent } from './http/http.component';
import {HttpService} from "./http/http.service";
import {HeaderComponent} from "./auth/header.component";
import {SigninComponent} from "./auth/unprotected/signin.component";
import {SignupComponent} from "./auth/unprotected/signup.component";
import {ProtectedComponent} from "./auth/protected/protected.component";
import {AuthService} from "./auth/auth.service";
import {ProtectedGuard} from "./auth/protected/protected.guard";
import {AniComponent} from "./Animation/ani.component";

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    AnotherComponent,
    DatabindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    MarkierungDirective,
    EigenesIfDirective,
    ServiceComponent,
    CmpAComponent,
    CmpBComponent,
    UserComponent,
    UserDetailComponent,
    UserEditComponent,
    HomeComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    PipesComponent,
    MultipliPipe,
    MeinfilterPipe,
    HttpComponent,
    AniComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    // HttpClientModule,
    meinRouting
  ],
  // LogService muss hier eingestellt werden damit man diesen Service auch von anderen Services aufrufen kann --> eine globale Instanz diese Service!
  providers: [LogService, UserService, UserDetailGuard, UserEditGuard, HttpService, AuthService, ProtectedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

