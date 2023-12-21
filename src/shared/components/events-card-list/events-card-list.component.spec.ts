import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCardListComponent } from './events-card-list.component';

describe('EventsCardListComponent', () => {
  let component: EventsCardListComponent;
  let fixture: ComponentFixture<EventsCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsCardListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventsCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
