//serve para escrever objetos ou classes:

interface IAnimal {
    type: string;
}

interface IDog extends IAnimal {
    breed: string;
}

interface ICat extends IAnimal {
   color: string
}

const dog: IDog = {
    type: 'mammal',
    breed: 'Akita'
}

const cat: ICat = {
    type:'mammal',
    color: 'black'
}

interface IDogCat extends IDog, ICat {
    age: number
}

const dogCat: IDogCat = {
    type: 'mammal',
    breed: 'Akita',
    color: ' black',
    age: 2
}

interface IRect {
    color?: string, //pode ter cor ou não 
    size: {
        width: number,
        height: number
    }
}

const rect1 : IRect = {
    color: 'green',
    size: {
        width:10,
        height:5
    }
}
rect1.color= 'black';

console.log(rect1);

let rect2= {} as IRect; //obj vazio
let rect3= <IRect>{}; //forma alternativa de fazer

rect2 = {
    color: 'white',
    size: {
        width: 10,
        height: 5
    }
}

interface IRectWithArea extends IRect {
    getArea: () => number; //criando um novo campo do obj que vai definir a area do retangulo
}

const rect4: IRectWithArea = {
    size: {
        width:10,
        height:5
    },
    getArea():number {
        return this.size.width * this.size.height
    },
}

console.log(rect4.getArea());

interface IStyles {
    [key: string]: string
}

const css: IStyles = {
    border: '1px solid black',
    marginTop: '10px',
    borderRadius: '10px'
}

css.border = '1px solid #000000'

// exercise 01:

interface IPerson {
    name: string,
    age: number,
    address: string,
}

const pessoa: IPerson = {
    name: 'jessica',
    age: 31,
    address: 'gaia',
}

function updatePersonName(person: IPerson, newName: string): IPerson {
    return {
        ...person,
        name: newName
    }
}

const updatePerson = updatePersonName(pessoa, 'Fiama')

console.log(pessoa);
console.log(updatePerson);

