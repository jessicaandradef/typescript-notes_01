
function sum (a: number, b: number):number {
    return a + b;
}

function toUpperCase(str: string):string {
    return str.trim().toUpperCase();
}

function getCar(name: string): string;
function getCar(name: string, price: number): string;
function getCar(name: string, price?:number): string {
    return price ? `Nome do carro: ${name}, preço: ${price}` : `Nome do carro: ${name}`
}

const car1 = getCar('bmw')
const car2= getCar('ferrari', 20000)

console.log(car1)
console.log(car2)