import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarFieldComponentComponent } from './star-field-component.component';

describe('StarFieldComponentComponent', () => {
  let component: StarFieldComponentComponent;
  let fixture: ComponentFixture<StarFieldComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarFieldComponentComponent]
    });
    fixture = TestBed.createComponent(StarFieldComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
