import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HRAdminComponent } from './hr-admin.component';

describe('HRAdminComponent', () => {
  let component: HRAdminComponent;
  let fixture: ComponentFixture<HRAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HRAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HRAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
