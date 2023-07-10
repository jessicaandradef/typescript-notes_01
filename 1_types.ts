console.log('hello world');

let isLoading: boolean = false;
//isLoading = true; vai dar erro!

let num:number = 110;
let float: number = 1.5;
let int: number = 1000;
let mens: string = 'loading'
let numArray: number[] = [1,2,3,4,5];
let strArray: string[] = ['a', 'b', 'c', 'd', 'e']

//tuple
let contact: [string, number] = ['jessica', 9876];

function fn(args:string):string {
    return 'text'
}

function fnVoid():void {
    console.log('Done!') //pode receber parametros mas não retorna nada. 
}

function myName(name: string):string {
    return `Hello ${name}`
}
console.log(myName('sarah'));

function infinity(msg: string):never {
    throw new Error(msg)
}

type TypeID = string | number;

const id1: TypeID = 123;
const id2:  TypeID = '123';

type SomeType = string | null | undefined; //tipos primitivos

type TypeUser = {
    name: string,
    age: number,
    address?: string // opcional, pode ter address ou não.
}

type TypeAddress = {
    city: string,
    country: string
}

const usr1: TypeUser ={
    name: 'jessica',
    age: 123
}

const adr1: TypeAddress ={
    city:'Maia',
    country:'USA'
}

interface IUser {
    name: string, 
    age: number
} //interface: serve para descrever objetos e classes.

let commom : TypeUser & TypeAddress;

commom = {
    ...usr1,
    ...adr1
}

console.log(commom);




