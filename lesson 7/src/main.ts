// interface Obj {
//     one:number,
//     two:number
// }

interface Obj{
    [index: string]:number
}

let newone : Obj = {
    one:34,
    two:34
}

for(let key in newone){
    console.log(newone[key])
    // console.log(newone[key as keyof Obj])
}


type income = "main" | "side";

type Salary = Record<income, number>;

const obj:Salary = {
    main:34,
    side:34,
}


