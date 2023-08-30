import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpamsUserComponent } from './spams-user.component';

describe('SpamsUserComponent', () => {
  let component: SpamsUserComponent;
  let fixture: ComponentFixture<SpamsUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpamsUserComponent]
    });
    fixture = TestBed.createComponent(SpamsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
