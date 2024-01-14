import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwaitingAdminsComponent } from './awaiting-admins.component';

describe('AwaitingAdminsComponent', () => {
  let component: AwaitingAdminsComponent;
  let fixture: ComponentFixture<AwaitingAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwaitingAdminsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AwaitingAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
