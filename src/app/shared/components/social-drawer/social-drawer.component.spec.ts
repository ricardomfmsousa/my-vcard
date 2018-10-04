import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

import { SocialDrawerComponent } from './social-drawer.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SocialDrawerItem } from './social-drawer-item.model';

describe('SocialDrawerComponent', () => {
  let component: SocialDrawerComponent;
  let fixture: ComponentFixture<SocialDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [CommonModule],
      declarations: [SocialDrawerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialDrawerComponent);
    component = fixture.componentInstance;
    component.items = [new SocialDrawerItem('Test', 'http://test.com', 'icon')];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assure that the action parameter is a link', () => {
    const link = `http://test.com`;
    const funct = () => {};
    expect(component.isLink(link)).toBeTruthy();
    expect(component.isLink(funct)).toBeFalsy();
  });

  it('should execute the action function', () => {
    let executed = false;
    const action = () => (executed = true);
    component.handleClickAction(action);
    expect(executed).toBeTruthy();
  });
});
