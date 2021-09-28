import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProducsComponent } from './add-edit-producs.component';

describe('AddEditProducsComponent', () => {
  let component: AddEditProducsComponent;
  let fixture: ComponentFixture<AddEditProducsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditProducsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditProducsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
