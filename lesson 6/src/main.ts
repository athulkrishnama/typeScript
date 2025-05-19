// class car{
//     name:string;
//     constructor(name:string){
//         this.name = name;
//     }
// }


// class Car{
//     constructor(
//         public readonly name:string,
//         public modalName:string,
//         private power:number,
//         protected parts: string[]
//     ){
//         this.name = name;
//         this.modalName = modalName;
//         this.power = power;
//         this.parts = parts;
//     }

//     getPower(){
//         return this.power
//     }
// }

// class Tata extends Car{
//     constructor(modalName:string, power:number, parts:string[], public serial:number){
//         super("Tata",modalName, power, parts);
//         this.serial = serial;
//     }

//     getParts(){
//         return super.parts;
//     }
// }

// const nexon = new Tata("nexon", 999, ["typre", "alloy"], 343234);

// console.log(nexon.modalName, nexon.name, nexon.getParts())


interface car {
    name:string,
    start:(sound:string)=>string;
}

class Tata implements car{
    name="Tata"
    start(sound:string){
        return ""
    }
}