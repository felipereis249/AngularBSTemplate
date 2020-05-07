import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalRoutingModule } from './main-routing.module';
import { LoginComponent } from './components/shared/login/login.component';
import { RegisterComponent } from './components/shared/register/register.component';

@NgModule({
  declarations: [ HomeComponent, ContactComponent, AboutComponent, LoginComponent, RegisterComponent ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
  ]
})
export class MainModule { }
