import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastApprovedComponent } from './past-approved.component';

describe('PastApprovedComponent', () => {
  let component: PastApprovedComponent;
  let fixture: ComponentFixture<PastApprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastApprovedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PastApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
