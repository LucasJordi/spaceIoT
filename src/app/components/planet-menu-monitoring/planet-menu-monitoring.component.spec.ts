import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetMenuMonitoringComponent } from './planet-menu-monitoring.component';

describe('PlanetMenuMonitoringComponent', () => {
  let component: PlanetMenuMonitoringComponent;
  let fixture: ComponentFixture<PlanetMenuMonitoringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanetMenuMonitoringComponent]
    });
    fixture = TestBed.createComponent(PlanetMenuMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
