import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseStudyComponent } from './browse-study.component';

describe('BrowseStudyComponent', () => {
  let component: BrowseStudyComponent;
  let fixture: ComponentFixture<BrowseStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
