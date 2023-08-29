import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IonMenu } from '@ionic/angular';
import { MenuServiceService } from 'src/app/services/menu-service/menu-service.service';
@Component({
  selector: 'ship-menu-monitoring',
  templateUrl: './ship-menu-monitoring.component.html',
  styleUrls: ['./ship-menu-monitoring.component.scss']
})
export class ShipMenuMonitoringComponent implements OnInit{
  constructor(private menuService:MenuServiceService){}
  @ViewChild('menu', { static: true }) menu!: IonMenu;

  @Input() temperatureT:any
  @Input() fuel:any
  @Input() increment:any
  ngOnInit(): void {
    this.menuService.getOpenMenuShip().subscribe(()=>{
      console.log("oioioi222")
      this.toggleMenuShip()
    })
    
  }
  
  toggleMenuShip(){
    this.menu.open()
  }

  @Output() decrementT = new EventEmitter<void>();
  @Output() incrementT = new EventEmitter<void>();

  decrementVelocity(){
    this.decrementT.emit()
  }

  incrementVelocity(){
    this.incrementT.emit()

  }


  skills=[
    {
      id:1,
      name:"",
      img:"assets/skill1.png"
    },
    {
      id:1,
      name:"",
      img:"assets/skill2.png"
    },
    {
      id:1,
      name:"",
      img:"assets/skill3.png"
    },
    {
      id:1,
      name:"",
      img:"assets/skill4.png"
    }
  ]

}
