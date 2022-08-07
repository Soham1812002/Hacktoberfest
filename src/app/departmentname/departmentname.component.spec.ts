import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentnameComponent } from './departmentname.component';

describe('DepartmentnameComponent', () => {
  let component: DepartmentnameComponent;
  let fixture: ComponentFixture<DepartmentnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentnameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
