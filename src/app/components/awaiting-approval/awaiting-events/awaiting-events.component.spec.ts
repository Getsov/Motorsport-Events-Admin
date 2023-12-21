import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwaitingEventsComponent } from './awaiting-events.component';

describe('AwaitingEventsComponent', () => {
  let component: AwaitingEventsComponent;
  let fixture: ComponentFixture<AwaitingEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwaitingEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AwaitingEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
