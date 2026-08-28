let person1 = {
  firstName: "Fahma",
  lastName: "Warsame",
  age: 20,
  town: "Mogadishu",
};

let person2 = {
  firstName: "Mariam",
  lastName: "Tahlil",
  age: 27,
  town: "London",
};

// console.log(person1)
// console.log(person2.lastName)
console.log(person2.town)

console.log(person2["town"]);

for (let key in person1) {
  console.log(key + ": " + person1[key]);
}