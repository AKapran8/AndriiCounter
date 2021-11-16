import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCountComponent } from './add-count.component';

describe('AddCountComponent', () => {
  let component: AddCountComponent;
  let fixture: ComponentFixture<AddCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
