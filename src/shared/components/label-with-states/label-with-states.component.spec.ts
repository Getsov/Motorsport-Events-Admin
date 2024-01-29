import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelWithStatesComponent } from './label-with-states.component';

describe('LabelWithStatesComponent', () => {
  let component: LabelWithStatesComponent;
  let fixture: ComponentFixture<LabelWithStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelWithStatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LabelWithStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
