class Dog {
  constructor(readonly name: string) {}

  sayHello(): string {
    return "Dog says hello!";
  }
}

class Fish {
  constructor(readonly name: string) {}

  dive(howDeep: number): string {
    return `Diving ${howDeep} feet`;
  }
}

type Pet = Dog | Fish;

function talkToPet(pet: Pet): string {
  if (pet instanceof Dog) {
    return pet.sayHello();
  } else if (pet instanceof Fish) {
    return "Fish cannot talk, sorry";
  }
}

const myDog = new Dog("Sammy");
const myFish = new Fish("Marry");

console.log(talkToPet(myDog));
console.log(talkToPet(myFish));
