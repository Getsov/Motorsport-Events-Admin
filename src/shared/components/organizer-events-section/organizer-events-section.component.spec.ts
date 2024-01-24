import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerEventsSectionComponent } from './organizer-events-section.component';

describe('OrganizerEventsSectionComponent', () => {
  let component: OrganizerEventsSectionComponent;
  let fixture: ComponentFixture<OrganizerEventsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizerEventsSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizerEventsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
