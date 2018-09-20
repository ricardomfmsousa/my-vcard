import { UtilService } from './shared/services/util/util.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { UnderConstructionComponent } from './views/under-construction/under-construction.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    NavbarComponent,
    UnderConstructionComponent
  ],
  imports: [
    FontAwesomeModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [UtilService],
  bootstrap: [AppComponent]
})
export class AppModule {}
