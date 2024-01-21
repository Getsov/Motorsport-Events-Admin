import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingApprovedComponent } from './upcoming-approved.component';

describe('UpcomingApprovedComponent', () => {
  let component: UpcomingApprovedComponent;
  let fixture: ComponentFixture<UpcomingApprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingApprovedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpcomingApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
