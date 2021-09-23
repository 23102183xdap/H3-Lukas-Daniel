import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookIstComponent } from './book-ist.component';

describe('BookIstComponent', () => {
  let component: BookIstComponent;
  let fixture: ComponentFixture<BookIstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookIstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookIstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
