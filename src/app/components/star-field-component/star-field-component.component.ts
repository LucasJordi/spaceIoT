import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PlanetsRef } from 'src/app/config/planets';
import { PlanetDTO } from 'src/app/models/Planet.dto';
import { SpaceShipService } from 'src/app/services/space-shipp/space-ship.service';

@Component({
  selector: 'star-field-component',
  templateUrl: './star-field-component.component.html',
  styleUrls: ['./star-field-component.component.scss']
})
export class StarFieldComponentComponent implements OnInit, AfterViewInit {
  @ViewChild('space', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private stars: Star[] = [];
  constructor(
    public spaceShiptService: SpaceShipService
  ){

  }
  
  

  ngAfterViewInit(): void {
    this.ctx = this.canvasRef.nativeElement.getContext('2d') as CanvasRenderingContext2D;
    this.resizeCanvas();
    
    this.drawBackground();
    this.resizeCanvas();
    this.setupStars();
    this.updateStars();
    const canvas = this.canvasRef.nativeElement as HTMLCanvasElement
    canvas.addEventListener('mousemove', (event) => {
      const canvasRect = canvas.getBoundingClientRect();
      const x = event.clientX ;
      const y = event.clientY ;
     
      for(const planet of PlanetsRef){
        if(x>=this.spaceShiptService.getSett().x && x<=this.spaceShiptService.getSett().x+this.spaceShiptService.getSett().width && (y>=this.spaceShiptService.getSett().y && y<=this.spaceShiptService.getSett().y+this.spaceShiptService.getSett().height)){
          canvas.style.cursor="pointer"
          break;

        }
        if(x>=planet.x && x<=planet.x+planet.width && (y>=planet.y && y<=planet.y+planet.height)){
          canvas.style.cursor="pointer"
          break;

        }else{
          canvas.style.cursor=""

        }
      }
      
    });
    canvas.addEventListener('click', (event) => {
      const x = event.clientX ;
      const y = event.clientY ;
      for(const planet of PlanetsRef){
        if(x>=planet.x && x<=planet.x+planet.width && (y>=planet.y && y<=planet.y+planet.height)){
          planet.function()
          break;

        }
      }
      
    });
    
    
    
    
    
  }
  // Height of the image
  
  setupStars(): void {
    this.stars = [];
    const numStars = 200;

    for (let i = 0; i < numStars; i++) {
      const star = new Star(this.canvasRef.nativeElement);
      this.stars.push(star);
    }
  }
  moon!:Planet
  earth!:Planet
  mars!:Planet
  jupiter!:Planet
  saturn!:Planet
  spaceShip!:SpaceShip

  setupEarth(){
    // this.drawBackground()
    // this.earth = new Planet(this.canvasRef.nativeElement,0);
    // this.earth.show(this.ctx)
    // requestAnimationFrame(() => this.setupEarth());
  }
  setupSolarSystem(){
    // this.drawBackground()
    this.earth = new Planet(this.canvasRef.nativeElement,0);
    this.earth.show(this.ctx)

    this.moon = new Planet(this.canvasRef.nativeElement,1);
    this.moon.show(this.ctx)

    this.mars = new Planet(this.canvasRef.nativeElement,2);
    this.mars.show(this.ctx)

    this.jupiter = new Planet(this.canvasRef.nativeElement,3);
    this.jupiter.show(this.ctx)

    this.saturn = new Planet(this.canvasRef.nativeElement,4);
    this.saturn.show(this.ctx)

    this.spaceShip =  new SpaceShip(this.canvasRef.nativeElement,this.spaceShiptService)
    this.spaceShip.move()
    this.spaceShip.show(this.ctx)

    requestAnimationFrame(() => this.setupSolarSystem());
  }
  

  updateStars(): void {
    this.drawBackground();
    this.setupSolarSystem()

    for (const star of this.stars) {
      star.move();
      star.show(this.ctx);

      
    }

    requestAnimationFrame(() => this.updateStars());
  }

  ngOnInit(): void {
    
  }

  resizeCanvas(): void {
    this.canvasRef.nativeElement.width = window.innerWidth;
    this.canvasRef.nativeElement.height = window.innerHeight;
    this.drawBackground();
  }

  drawBackground(): void {
    this.ctx.fillStyle = '#030509';
    this.ctx.fillRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);
    
  }
 

}
class Planet {
  x: number;
  y: number;  
  canvasWidth: number;
  canvasHeight: number;
  image:HTMLImageElement = new Image()
  planet!:PlanetDTO
  constructor(canvas: HTMLCanvasElement,id:number) {
    this.planet = PlanetsRef[id]
    this.x = this.planet.x
    this.y = this.planet.y
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
    this.image.src=this.planet.image
    
  }

 
  move(){

  }
  show(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.image,this.x,this.y,this.planet.width,this.planet.height)
  }
}
let angle = 0;
class SpaceShip {
  x: number;
  y: number;  
  canvasWidth: number;
  canvasHeight: number;
  image:HTMLImageElement = new Image()
  planet!:PlanetDTO
  canvas
  spaceShipService!:SpaceShipService
  constructor(
    canvas: HTMLCanvasElement,
    spaceShipService: SpaceShipService
    ) {
    this.spaceShipService=spaceShipService
    this.planet = spaceShipService.getSett()
    this.canvas = canvas
    this.x = this.planet.x
    this.y = this.planet.y
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
    this.image.src=this.planet.image
    
  }
  move(): void {
    const destiny = this.spaceShipService.getDestiny()
    const increment = 0.005
    


    if(this.spaceShipService.getSett().x>=destiny.x+100){

      
      
      
    }else{
      this.spaceShipService.changeVelocity(this.spaceShipService.getVelocity()+increment)
      this.spaceShipService.getSett().x+=increment


    }
    
    
    
    
  }

  show(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.image,this.x,this.y,this.planet.width,this.planet.height)
  }
}

class Star {
  x: number;
  y: number;
  radius: number;
  color: string;
  canvasWidth: number;
  canvasHeight: number;

  constructor(canvas: HTMLCanvasElement) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 2;
    this.color = 'white';
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
  }

  move(): void {
    this.x -= 0.1;
    
    if (this.x < 0) {
      this.x = this.canvasWidth;
      this.y = Math.random() * this.canvasHeight;
    }
  }

  show(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}