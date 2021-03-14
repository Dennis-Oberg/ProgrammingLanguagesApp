import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlanguagedialogComponent } from './addlanguagedialog.component';

describe('AddlanguagedialogComponent', () => {
  let component: AddlanguagedialogComponent;
  let fixture: ComponentFixture<AddlanguagedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddlanguagedialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlanguagedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
