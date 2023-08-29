import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IonMenu } from '@ionic/angular';
import { PlanetDTO } from 'src/app/models/Planet.dto';
import { MenuServiceService } from 'src/app/services/menu-service/menu-service.service';

@Component({
  selector: 'planet-menu-monitoring',
  templateUrl: './planet-menu-monitoring.component.html',
  styleUrls: ['./planet-menu-monitoring.component.scss']
})
export class PlanetMenuMonitoringComponent implements OnInit {

  constructor(private menuService:MenuServiceService){}
  @ViewChild('menuPlanet', { static: true }) menu!: IonMenu;

  @Input() planet!:PlanetDTO
  
  ngOnInit(): void {
    this.menuService.getOpenMenuPlanet().subscribe(()=>{
      console.log("oididididid")
      this.toggleMenu()
    })
    
  }
  
  toggleMenu(){

    this.menu.open()
  }

  


  

}
