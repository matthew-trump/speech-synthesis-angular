import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteNavigationComponent } from './route-navigation.component';

describe('RouteNavigationComponent', () => {
  let component: RouteNavigationComponent;
  let fixture: ComponentFixture<RouteNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
