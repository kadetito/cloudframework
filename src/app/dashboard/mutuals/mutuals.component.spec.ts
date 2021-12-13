import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualsComponent } from './mutuals.component';

describe('MutualsComponent', () => {
  let component: MutualsComponent;
  let fixture: ComponentFixture<MutualsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutualsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MutualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
