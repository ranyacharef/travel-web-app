import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPropositionsComponent } from './booking-propositions.component';

describe('BookingPropositionsComponent', () => {
  let component: BookingPropositionsComponent;
  let fixture: ComponentFixture<BookingPropositionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingPropositionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingPropositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
