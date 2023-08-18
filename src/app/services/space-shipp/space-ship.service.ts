import { Injectable } from '@angular/core';
import { PlanetDTO } from 'src/app/models/Planet.dto';

@Injectable({
  providedIn: 'root'
})
export class SpaceShipService {
  private velocity=0
  private SettingPlanet:PlanetDTO={
    id:"5",    
    name:"SpaceShip",
    x:300,
    y:470,
    width:50,
    height:20,
    function:()=>console.log("5"),
    image:"assets/space-ship.png"
}
  private destiny={
    x:900,
    y:200
  }
  

  constructor() { }

  changeVelocity(val:number){
    this.velocity=val
  }
  getVelocity(){
    return this.velocity
  }

  getDestiny(){
    return this.destiny
  }

  changeDestiny(x:number,y:number){
    this.destiny = {x,y}
  }
  getSett(){
    return this.SettingPlanet
  }
  changeSett(obj:PlanetDTO){
    this.SettingPlanet=obj
  }
}
