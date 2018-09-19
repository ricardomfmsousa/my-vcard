import { TypingAnimationModule } from 'angular-typing-animation';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeViewComponent } from './home-view.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeViewComponent', () => {
  let component: HomeViewComponent;
  let fixture: ComponentFixture<HomeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeViewComponent],
      imports: [
        TypingAnimationModule,
        RouterTestingModule,
        AngularFontAwesomeModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
