import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTableRowComponent } from './account-table-row.component';

describe('AccountTableRowComponent', () => {
  let component: AccountTableRowComponent;
  let fixture: ComponentFixture<AccountTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountTableRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
