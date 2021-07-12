import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTopicsComponent } from './project-topics.component';

describe('ProjectTopicsComponent', () => {
  let component: ProjectTopicsComponent;
  let fixture: ComponentFixture<ProjectTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectTopicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
