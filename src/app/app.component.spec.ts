import { TestBed, async } from '@angular/core/testing';
import { fadeAnimation } from './animations/fade-in.animation';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { RouterTestingModule } from '@angular/router/testing';
import { routedComponents, appRoutes } from './app.routing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        routedComponents
      ],
      imports: [
        RouterTestingModule.withRoutes(appRoutes),
        AngularFontAwesomeModule,
        BrowserModule,
        BrowserAnimationsModule,
        AlertModule.forRoot(),
        AngularFontAwesomeModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
