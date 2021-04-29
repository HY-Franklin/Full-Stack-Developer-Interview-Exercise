import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDialogBoxComponent } from './new-dialog-box.component';

describe('NewDialogBoxComponent', () => {
  let component: NewDialogBoxComponent;
  let fixture: ComponentFixture<NewDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
