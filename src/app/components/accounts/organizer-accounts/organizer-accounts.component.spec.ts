import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerAccountsComponent } from './organizer-accounts.component';

describe('OrganizerAccountsComponent', () => {
  let component: OrganizerAccountsComponent;
  let fixture: ComponentFixture<OrganizerAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizerAccountsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizerAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
