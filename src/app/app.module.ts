import { SocialDrawerComponent } from './shared/components/social-drawer/social-drawer.component';
import { UtilService } from './shared/services/util/util.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    SocialDrawerComponent,
    routedComponents,
    NavbarComponent
  ],
  imports: [
    FontAwesomeModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [UtilService],
  bootstrap: [AppComponent]
})
export class AppModule {}
