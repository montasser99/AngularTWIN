import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddUserComponent } from './addd-user.component';

describe('AdddUserComponent', () => {
  let component: AdddUserComponent;
  let fixture: ComponentFixture<AdddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
