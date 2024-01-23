import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSortComponent } from './section-sort.component';

describe('SectionSortComponent', () => {
  let component: SectionSortComponent;
  let fixture: ComponentFixture<SectionSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionSortComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
