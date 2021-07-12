import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChapterStatusComponent } from './view-chapter-status.component';

describe('ViewChapterStatusComponent', () => {
  let component: ViewChapterStatusComponent;
  let fixture: ComponentFixture<ViewChapterStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChapterStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChapterStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
