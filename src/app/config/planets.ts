import { PlanetDTO } from "../models/Planet.dto";

export const PlanetsRef:PlanetDTO[]=[
    {   
        id:"0",
        name:"Earth",
        x:100,
        y:400,
        width:100,
        height:100,
        function:()=>console.log("this?.id"),
        image:"assets/earth.png",
        data:[
            {
                name:"Gravity",
                value:"10,44 m/s²",    
            },
            {
                name:"Orbital Period",
                value:"29 years",
            },
            {
                name:"Radius",
                value: "58.232 km",    
            },
            {
                name:"Moons",
                value:[ "Titã", "Encélado", "Mimas", "Dione", "Jápeto", "Tétis" ],
            },
            {
                name:"Sun Distance",
                value:"1,434 × 10^9 km"
    
            }
        ]
    },
    {
        id:"1",    
        name:"Moon",
        x:200,
        y:400,
        width:30,
        height:30,
        function:()=>console.log("2"),
        image:"assets/moon.png",
        data:[
            {
                name:"Gravity",
                value:"10,44 m/s²",    
            },
            {
                name:"Orbital Period",
                value:"29 years",
            },
            {
                name:"Radius",
                value: "58.232 km",    
            },
            {
                name:"Moons",
                value:[ "Titã", "Encélado", "Mimas", "Dione", "Jápeto", "Tétis" ],
            },
            {
                name:"Sun Distance",
                value:"1,434 × 10^9 km"
    
            }
        ]
    },
    {
        id:"2",    
        name:"Mars",
        x:300,
        y:500,        
        width:80,
        height:80,
        function:()=>console.log("3"),
        image:"assets/mars.png",
        data:[
            {
                name:"Gravity",
                value:"10,44 m/s²",    
            },
            {
                name:"Orbital Period",
                value:"29 years",
            },
            {
                name:"Radius",
                value: "58.232 km",    
            },
            {
                name:"Moons",
                value:[ "Titã", "Encélado", "Mimas", "Dione", "Jápeto", "Tétis" ],
            },
            {
                name:"Sun Distance",
                value:"1,434 × 10^9 km"
    
            }
        ]
    },
    {
        id:"3",    
        name:"Jupiter",
        x:500,
        y:500,
        width:200,
        height:200,
        function:()=>console.log("4"),
        image:"assets/jupiter.png",
        data:[
            {
                name:"Gravity",
                value:"10,44 m/s²",    
            },
            {
                name:"Orbital Period",
                value:"29 years",
            },
            {
                name:"Radius",
                value: "58.232 km",    
            },
            {
                name:"Moons",
                value:[ "Titã", "Encélado", "Mimas", "Dione", "Jápeto", "Tétis" ],
            },
            {
                name:"Sun Distance",
                value:"1,434 × 10^9 km"
    
            }
        ]
    },
    {
        id:"4",    
        name:"Saturn",
        x:900,
        y:200,
        width:300,
        height:300,
        function:()=>console.log("5"),
        image:"assets/saturn.png",
        data:[
            {
                name:"Gravity",
                value:"10,44 m/s²",    
            },
            {
                name:"Orbital Period",
                value:"29 years",
            },
            {
                name:"Radius",
                value: "58.232 km",    
            },
            {
                name:"Moons",
                value:[ "Titã", "Encélado", "Mimas", "Dione", "Jápeto", "Tétis" ],
            },
            {
                name:"Sun Distance",
                value:"1,434 × 10^9 km"
    
            }
        ]
    },
    
]