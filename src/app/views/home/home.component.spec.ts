import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UtilService } from '../../shared/services/util/util.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeViewComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeViewComponent', () => {
  let component: HomeViewComponent;
  let fixture: ComponentFixture<HomeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [HomeViewComponent],
      imports: [RouterTestingModule, FontAwesomeModule],
      providers: [UtilService]
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
