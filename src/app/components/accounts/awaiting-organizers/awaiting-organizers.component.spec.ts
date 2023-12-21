import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwaitingOrganizersComponent } from './awaiting-organizers.component';

describe('AwaitingOrganizersComponent', () => {
  let component: AwaitingOrganizersComponent;
  let fixture: ComponentFixture<AwaitingOrganizersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwaitingOrganizersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AwaitingOrganizersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
