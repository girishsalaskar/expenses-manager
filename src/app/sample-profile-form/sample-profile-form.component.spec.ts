import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleProfileFormComponent } from './sample-profile-form.component';

describe('SampleProfileFormComponent', () => {
  let component: SampleProfileFormComponent;
  let fixture: ComponentFixture<SampleProfileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleProfileFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
