//1 - Campos em classe
class User {
  name!: string;
  age!:number
}

const kened = new User()
console.log(kened);

kened.name = "Kened";
kened.age = 30;
console.log(kened);

//2 - Contructor

class newUser {
  name
  age

  constructor(name:string, age:number){
    this.name = name
    this.age = age
  }
}

const joao = new newUser("Joao", 20);

console.log(joao)

//3 - Campo readonly

class Car {
  name
  readonly wheels = 4

  constructor(name:string){
    this.name = name
  }

}
const fusca = new Car("Fusca")
console.log(fusca)
console.log(fusca.wheels)
fusca.name = "Fusca Turbo";
console.log(fusca);

//4 - Herança e Super

class Machine {
  name
  constructor(name: string){
    this.name = name
  }
}

const trator = new Machine("Trator");

class KillerMachine extends Machine {
  guns

  constructor(name:string, guns:number){
    super(name)
    this.guns = guns
  }
}

const destroyer = new KillerMachine("Destroyer", 4)

console.log(trator);
console.log(destroyer);

//5 - Métodos

class Dwarf {
  name

  constructor(name:string){
    this.name = name
  }

  greeting() {
    console.log("Hey Stranger !")
  }
}

const jimmy = new Dwarf("Jimmy");

console.log(jimmy);
jimmy.greeting();

//6 - O This
class Truck {
  model
  hp

  constructor(model:string, hp:number){
    this.model = model
    this.hp = hp
  }

  showDetails() {
    console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`)
  }

}

const volvo = new Truck("Volvo", 400);
const scania = new Truck("Scania", 500);

volvo.showDetails();

//7 - Getters

class Person {
  name
  surname

  constructor(name: string, surname: string){
    this.name = name
    this.surname = surname
  }

  // get fullName(){
  //   return this.name + " " +  this.surname;
  // }
}

const kenedFelix = new Person("Kened", "Felix")

//console.log(kenedFelix.fullName)

//8 - Setters
class Coords {
  x!: number
  y!:number

  // set fillX(x: number){
  //   if(x === 0){
  //     return
  //   }

  //   this.x = x

  //   console.log("X inserido com sucesso")
  // }
  // set fillY(y: number){
  //   if(y === 0){
  //     return
  //   }

  //   this.y = y

  //   console.log("Y inserido com sucesso")
  // }

  // get getCoords() {
  //   return `X: ${this.x} e Y: ${this.y}`
  // }
}

const myCoords = new Coords()
// myCoords.fillX = 15
// myCoords.fillY = 0

console.log(myCoords);
//console.log(myCoords.getCoords)

//9 - Herança de Interfaces implements

interface showTitle {
  itemTitle(): string;
}

class blogPost implements showTitle {
  title
  
  constructor(title: string){
    this.title = title
  }

  itemTitle() {
    return `O titulo do post é: ${this.title}`
  }

}

const myPost = new blogPost("Hello World");

console.log(myPost.itemTitle())

//10 - Override de métodos