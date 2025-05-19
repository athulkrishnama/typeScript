const printString = (arg:string):string =>arg;

const printany = <Type>(arg:Type):Type => arg;


const firstElement = <T>(list: T[]):T => list[0];