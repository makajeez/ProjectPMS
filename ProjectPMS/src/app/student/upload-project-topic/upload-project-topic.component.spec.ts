import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadProjectTopicComponent } from './upload-project-topic.component';

describe('UploadProjectTopicComponent', () => {
  let component: UploadProjectTopicComponent;
  let fixture: ComponentFixture<UploadProjectTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadProjectTopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadProjectTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
