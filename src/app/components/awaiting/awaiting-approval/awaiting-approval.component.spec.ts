import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwaitingApprovalComponent } from './awaiting-approval.component';

describe('AwaitingApprovalComponent', () => {
  let component: AwaitingApprovalComponent;
  let fixture: ComponentFixture<AwaitingApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwaitingApprovalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AwaitingApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
