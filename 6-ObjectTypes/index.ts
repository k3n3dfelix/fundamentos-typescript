//1 - tipo de objeto para função com interface
interface Product {
  name: string
  price:number;
  isAvailable:true
}


function showProductDetails(product: Product){
  console.log(`O nome do produto é: ${product.name} e seu preço é R$${product.price}`);
  if(product.isAvailable){
    console.log("O produto está disponivel");
  }
}

const shirt:Product = {
  name:"Camisa",
  price:19.99,
  isAvailable: true
}

showProductDetails(shirt);

//2 - propiedadeopcional em intereface

interface USer {
  email: string;
  role?: string;
}

function showDetails(user:USer) {
  console.log(`O usuário tem o e-mail: ${user.email}`)

  if(user.role){
    console.log(`A função do usuério é: ${user.role}`)
  }
}

const u1:USer = {email:"kened@email.com", role:"admin"}
const u2:USer = {email:"kened@email.com", role:"admin"}

showDetails(u1);
showDetails(u2);

//3 - readonly

interface Car {
  brand: string
  readonly wheels: number;
}

const fusca:Car = {
  brand: "VW",
  wheels:4
}

console.log(fusca)

//fusca.wheels = 5 ----> não é possivel com o readonly

//4 - index signature
interface CoordObject {
  [index:string] : number;
}

let coords:CoordObject = {
  x : 20
}
coords.y = 15

//5 - Extending Types
interface Human {
  name:string;
  age:number;
}

interface SuperHuman extends Human {
  superpowers: string[]
}

const matheus: Human = {
  name: "Kened",
  age:30
}

const goku: SuperHuman = {
  name: "Goku",
  age: 50,
  superpowers: ["Kamehameha","Genki Dama"]
}

console.log(goku);

console.log(goku.superpowers);

//6 - Intersection Types

interface Character {
  name:string;
}

interface Gun {
  type: string;
  caliber:number;
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
  name:"Arnold",
  type: "Shotgun",
  caliber: 12
}

console.log(arnold);
console.log(arnold.caliber);

//7 - readyonly array
let myArray: ReadonlyArray<string> = ["Maça", "Laranja", "Banana"]

//myArray[3] = "Mamão"

console.log(myArray);

myArray.forEach((item) => {
  console.log('Fruta: ' + item)
})

myArray = myArray.map((item) => {
  return `Fruta: ${item}`
})

console.log(myArray)

//8 - Tuplas
type fiveNumbers = [number, number, number, number,number];

const myNumberArray: fiveNumbers = [1,2,3,4,5];
const myNumberArray2: fiveNumbers = [6,7,8,9,10];

type nameAndAge = [string, number]

const anotherUser: nameAndAge = ["Kened", 30]
console.log(anotherUser[0])

anotherUser[0] = "João";
console.log(anotherUser[0])

//9 - Tuplas com readonly
function showNumbers(numbers: readonly [number,number]) {
  console.log(numbers[0]);
  console.log(numbers[1]);
}

showNumbers([1,2]);


