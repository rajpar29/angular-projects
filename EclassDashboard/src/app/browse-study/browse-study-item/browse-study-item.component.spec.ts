import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseStudyItemComponent } from './browse-study-item.component';

describe('BrowseStudyItemComponent', () => {
  let component: BrowseStudyItemComponent;
  let fixture: ComponentFixture<BrowseStudyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseStudyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseStudyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
