import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotApprovedComponent } from './not-approved.component';

describe('NotApprovedComponent', () => {
  let component: NotApprovedComponent;
  let fixture: ComponentFixture<NotApprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotApprovedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
