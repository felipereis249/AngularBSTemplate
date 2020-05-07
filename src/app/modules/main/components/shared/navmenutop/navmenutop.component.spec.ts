import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavmenutopComponent } from './navmenutop.component';

describe('NavmenutopComponent', () => {
  let component: NavmenutopComponent;
  let fixture: ComponentFixture<NavmenutopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavmenutopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavmenutopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
