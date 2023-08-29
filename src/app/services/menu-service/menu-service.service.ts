import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {
  private openMenuShip = new Subject<void>()
  private openMenuPlanet = new Subject<void>()

  constructor() { }

  callOpenMenuShip(){
    
    this.openMenuShip.next()
  }

  getOpenMenuShip(){
    return this.openMenuShip.asObservable()
  }

  callOpenMenuPlanet(){
    this.openMenuPlanet.next()
  }

  getOpenMenuPlanet(){
    return this.openMenuPlanet.asObservable()
  }
}
