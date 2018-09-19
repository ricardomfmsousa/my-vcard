import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app.routing';
import { AlertModule } from 'ngx-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UnderConstructionComponent } from './views/under-construction/under-construction.component';
import { TypingAnimationModule } from 'angular-typing-animation';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    NavbarComponent,
    UnderConstructionComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    TypingAnimationModule,
    AlertModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
