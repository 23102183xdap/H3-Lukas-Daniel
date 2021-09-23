import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBooksComponent } from './our-books.component';

describe('OurBooksComponent', () => {
  let component: OurBooksComponent;
  let fixture: ComponentFixture<OurBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
