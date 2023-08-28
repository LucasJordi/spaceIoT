import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarFieldComponentComponent } from './components/star-field-component/star-field-component.component';
import { IonicModule } from '@ionic/angular';
import { ShipMenuMonitoringComponent } from './components/ship-menu-monitoring/ship-menu-monitoring.component';
import { PlanetMenuMonitoringComponent } from './components/planet-menu-monitoring/planet-menu-monitoring.component';

@NgModule({
  declarations: [
    AppComponent,
    StarFieldComponentComponent,
    ShipMenuMonitoringComponent,
    PlanetMenuMonitoringComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
