import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTestComponent } from './class-test.component';

describe('ClassTestComponent', () => {
  let component: ClassTestComponent;
  let fixture: ComponentFixture<ClassTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
