export interface PlanetDTO{
    id:string,
    name:string,
    x:number,
    y:number,
    width:number,
    height:number,
    function:Function,
    image:string,
    data?:Data[]
}

interface Data{
    name:string,
    value:string|string[]

}

