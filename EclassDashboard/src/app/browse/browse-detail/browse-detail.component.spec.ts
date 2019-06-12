import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseDetailComponent } from './browse-detail.component';

describe('BrowseDetailComponent', () => {
  let component: BrowseDetailComponent;
  let fixture: ComponentFixture<BrowseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
