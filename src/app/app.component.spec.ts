import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TestBed, async } from '@angular/core/testing';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { routedComponents, appRoutes } from './app-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, NavbarComponent, routedComponents],
      imports: [
        FontAwesomeModule,
        RouterTestingModule.withRoutes(appRoutes),
        BrowserModule,
        BrowserAnimationsModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
