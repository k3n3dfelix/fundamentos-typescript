//1 - Arrays -Sintaxe Nova
let numbers: number[] = [1,2,3,]

numbers.push(4);

console.log(numbers[2]);

const nomes: string[] = ["Kened", "Felix"]

//2 - Outra Sintaxe Array (antiga)
const nums: Array<number> = [100,200]
nums.push(300)
console.log(nums)

//3 - Any

const arr: any = [1, "teste", true, [], {nome:"Kened"}];
console.log(arr);

arr.push([1,2,3]);
console.log(arr);

//4 -parametros tipados

function soma(a:number, b:number){
  console.log(a + b)
}

soma(4,5)

//5 - Tipando o Retorno de função

function greeting(name:string): string{
  
  return `Olá ${name}`;
}
console.log(greeting('Kened'));

//6 - Funções Anonimas
setTimeout(function(){
  const sallary: number = 1000

  //console.log(parseFloat(sallary))
}, 2000);

//7 - Tipos de objeto
function passCordinates(coord: {x:number, y:number}){
  console.log('X coordinates: '+ coord.x);
  console.log('Y coordinates: '+ coord.y);
}
const objCoord = {x:239, y: 84.2}
passCordinates(objCoord);

//8 - Props opcionais
function showNumbers(a:number, b:number, c?:number){
  console.log('A: '+ a);
  console.log('B: '+ b);
  if(c){
    console.log('C: '+ c);
  }
  
}

showNumbers(1,2);

//9 - VAlidando argumento opcional
function advancedGreeting(firstName: string, lastName?: string){
  if(lastName !== undefined){
   return `Olá, ${firstName} ${lastName},tudo bem?`
  }

  return `Olá ${firstName}`;
}
console.log(advancedGreeting("Kened", "Felix"));
console.log(advancedGreeting("Kened"));

//10 - Union type
function showBalance(balance: string | number){
  console.log(`O saldo da conta é R$${balance}`);
}
showBalance(100);
showBalance('500');

//11 - Avançando em UnionTypes
function showUserRole(role: boolean | string){
  if(typeof role === "boolean"){
    return "Usuario não aprovado!";
  }

  return `a função do usuário é: ${role}`;
}

console.log(showUserRole(false));
console.log(showUserRole("Admin"));

//12 - Type Alias
type ID = string | number;
function showId(id: ID){
  console.log(`O ID é: ${id}`);
}
showId(1)
showId("200")

//13 - Intereface
interface Point {
  x:number;
  y: number;
  z:number;
}

function showCoords(obj: Point){
  console.log(`X:${obj.x} Y:${obj.y} Z:${obj.z}`)
}

const coordObj: Point={
  x:10,
  y:15,
  z:20
}

showCoords(coordObj);

//14 Inteface x Type Alias

interface Person {
  name:string;
}

interface Person {
  age:number;
}

const somePerson: Person = {name: "Kened", age: 30}
console.log(somePerson);

type personType ={
  name:string
}

//15 Literal Types
let test: "testando"

test = "testando"
console.log(test)

function showDirection(direction: "left" | "right" | "center"){
  console.log(`A direção é ${direction}`);
}

showDirection("left");

//16 - non null assertion operators

const p = document.getElementById("some-p");
console.log(p!.innerText);

//17 - Bigint

// let n: bigint
// n = 1000n
// console.log(n);
// console.log(typeof n);
// console.log(n + 100n);

//18 - Symbol

// let symbolA: symbol = Symbol("a");
// let symbolB = Symbol("a")
// console.log(symbolA == symbolB);
// console.log(symbolA === symbolB);

