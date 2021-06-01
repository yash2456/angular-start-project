import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UslidataComponent } from './uslidata.component';

describe('UslidataComponent', () => {
  let component: UslidataComponent;
  let fixture: ComponentFixture<UslidataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UslidataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UslidataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
