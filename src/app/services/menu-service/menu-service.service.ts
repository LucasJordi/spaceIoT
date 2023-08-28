import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {
  private openMenuShip = new Subject<void>()
  constructor() { }

  callOpenMenuShip(){
    this.openMenuShip.next()
  }

  getOpenMenuShip(){
    return this.openMenuShip.asObservable()
  }
}
