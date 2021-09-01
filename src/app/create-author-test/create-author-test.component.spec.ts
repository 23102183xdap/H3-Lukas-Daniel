import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAuthorTestComponent } from './create-author-test.component';

describe('CreateAuthorTestComponent', () => {
  let component: CreateAuthorTestComponent;
  let fixture: ComponentFixture<CreateAuthorTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAuthorTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAuthorTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
