import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeContentComponent } from './resume-content.component';

describe('ResumeContentComponent', () => {
  let component: ResumeContentComponent;
  let fixture: ComponentFixture<ResumeContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeContentComponent],
    });
    fixture = TestBed.createComponent(ResumeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
