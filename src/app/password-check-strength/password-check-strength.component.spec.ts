import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordCheckStrengthComponent } from './password-check-strength.component';

describe('PasswordCheckStrengthComponent', () => {
  let component: PasswordCheckStrengthComponent;
  let fixture: ComponentFixture<PasswordCheckStrengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordCheckStrengthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordCheckStrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
