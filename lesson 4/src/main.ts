// function signature

type mathFun =  (num0:number, num2:number)=>number;

// function signature using interface

interface mathFunction {
  (num0:number, num2:number):number;
}
const sum:mathFun = (num0, num2)=>{
  return num0 + num2;
}

// optional parameteres;

const sub = (num1:number, num2?:number):number=>{
  if(typeof num2 !== 'undefined'){
    return num1 + num2;
  }
  throw Error("number is not coming") 
}

// default parameters

const mul = (num0:number = 5)=>{

}

// rest parameteres

const div = (...nums:number[])=>{

}