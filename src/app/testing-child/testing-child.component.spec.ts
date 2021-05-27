import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingChildComponent } from './testing-child.component';

describe('TestingChildComponent', () => {
  let component: TestingChildComponent;
  let fixture: ComponentFixture<TestingChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
