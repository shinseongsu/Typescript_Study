type Person = {
  address: string;
};

let person1: any;

person1 = JSON.parse('{"address" : "25 Broadway"}');

console.log(person1.address);
