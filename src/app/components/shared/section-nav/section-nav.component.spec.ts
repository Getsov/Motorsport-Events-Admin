import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionNavComponent } from './section-nav.component';

describe('SectionNavComponent', () => {
  let component: SectionNavComponent;
  let fixture: ComponentFixture<SectionNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
