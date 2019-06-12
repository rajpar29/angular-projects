import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseStudyDetailComponent } from './browse-study-detail.component';

describe('BrowseStudyDetailComponent', () => {
  let component: BrowseStudyDetailComponent;
  let fixture: ComponentFixture<BrowseStudyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseStudyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseStudyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
