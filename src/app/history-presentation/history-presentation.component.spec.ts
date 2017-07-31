import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPresentationComponent } from './history-presentation.component';

describe('HistoryPresentationComponent', () => {
  let component: HistoryPresentationComponent;
  let fixture: ComponentFixture<HistoryPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
