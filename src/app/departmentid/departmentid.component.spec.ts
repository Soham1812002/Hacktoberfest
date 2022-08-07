import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentidComponent } from './departmentid.component';

describe('DepartmentidComponent', () => {
  let component: DepartmentidComponent;
  let fixture: ComponentFixture<DepartmentidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
