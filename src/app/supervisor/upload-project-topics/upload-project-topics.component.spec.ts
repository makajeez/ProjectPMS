import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadProjectTopicsComponent } from './upload-project-topics.component';

describe('UploadProjectTopicsComponent', () => {
  let component: UploadProjectTopicsComponent;
  let fixture: ComponentFixture<UploadProjectTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadProjectTopicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadProjectTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
