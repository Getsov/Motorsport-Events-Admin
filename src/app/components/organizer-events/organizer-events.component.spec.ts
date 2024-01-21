import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerEventsComponent } from './organizer-events.component';

describe('OrganizerEventsComponent', () => {
  let component: OrganizerEventsComponent;
  let fixture: ComponentFixture<OrganizerEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizerEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizerEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
