import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeneciaComponent } from './venecia.component';

describe('VeneciaComponent', () => {
  let component: VeneciaComponent;
  let fixture: ComponentFixture<VeneciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeneciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeneciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
