import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCompletedProjectComponent } from './upload-completed-project.component';

describe('UploadCompletedProjectComponent', () => {
  let component: UploadCompletedProjectComponent;
  let fixture: ComponentFixture<UploadCompletedProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadCompletedProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCompletedProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
