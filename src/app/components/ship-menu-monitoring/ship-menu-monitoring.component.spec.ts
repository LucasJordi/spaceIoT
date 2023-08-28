import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipMenuMonitoringComponent } from './ship-menu-monitoring.component';

describe('ShipMenuMonitoringComponent', () => {
  let component: ShipMenuMonitoringComponent;
  let fixture: ComponentFixture<ShipMenuMonitoringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShipMenuMonitoringComponent]
    });
    fixture = TestBed.createComponent(ShipMenuMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
