// App Shared Components
import { NavmenutopComponent } from './modules/main/components/shared/navmenutop/navmenutop.component';
import { FooterComponent } from './modules/main/components/shared/footer/footer.component';
import { NavbarComponent } from './modules/main/components/shared/navbar/navbar.component';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Aditional Modules
import { CollapseModule } from "ngx-bootstrap/collapse";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavmenutopComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Aditional Modules for Na-Collapse (forRoot is needed to inform who is the root module)
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
