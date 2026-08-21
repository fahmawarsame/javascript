let fruits = ["apple", "banana", "orange"];

// ==========================================
// 1. length
// Gets the number of items in the array
// ==========================================

console.log(fruits.length);
// Output: 3

// ==========================================
// 2. Access an item using [index]
// ==========================================

console.log(fruits[0]);
// Output: apple

console.log(fruits[1]);
// Output: banana

console.log(fruits[2]);
// Output: orange

// ==========================================
// 3. at()
// Gets an item using its index
// Supports negative indexes
// ==========================================

console.log(fruits.at(0));
// Output: apple

console.log(fruits.at(-1));
// Output: orange

console.log(fruits.at(-2));
// Output: banana

// ==========================================
// 4. indexOf()
// Finds the position of an item
// ==========================================

console.log(fruits.indexOf("apple"));
// Output: 0

console.log(fruits.indexOf("banana"));
// Output: 1

console.log(fruits.indexOf("orange"));
// Output: 2

console.log(fruits.indexOf("mango"));
// Output: -1

// ==========================================
// 5. lastIndexOf()
// Finds the last occurrence of an item
// ==========================================

console.log(fruits.lastIndexOf("apple"));
// Output: 0

// ==========================================
// 6. includes()
// Checks if an item exists
// Returns true or false
// ==========================================

console.log(fruits.includes("apple"));
// Output: true

console.log(fruits.includes("banana"));
// Output: true

console.log(fruits.includes("mango"));
// Output: false

// ==========================================
// 7. push()
// Adds an item to the END
// ==========================================

fruits.push("mango");

console.log(fruits);
// Output: ["apple", "banana", "orange", "mango"]

// ==========================================
// 8. pop()
// Removes the LAST item
// ==========================================

fruits.pop();

console.log(fruits);
// Output: ["apple", "banana", "orange"]

// ==========================================
// 9. unshift()
// Adds an item to the BEGINNING
// ==========================================

fruits.unshift("mango");

console.log(fruits);
// Output: ["mango", "apple", "banana", "orange"]

// ==========================================
// 10. shift()
// Removes the FIRST item
// ==========================================

fruits.shift();

console.log(fruits);
// Output: ["apple", "banana", "orange"]

// ==========================================
// 11. slice()
// Copies/extracts part of an array
// Does NOT change the original array
// ==========================================

console.log(fruits.slice(0, 2));
// Output: ["apple", "banana"]

console.log(fruits.slice(1, 3));
// Output: ["banana", "orange"]

console.log(fruits.slice(-1));
// Output: ["orange"]

// ==========================================
// 12. splice()
// Adds/removes items
// DOES change the original array
// ==========================================

fruits.splice(1, 1);

console.log(fruits);
// Output: ["apple", "orange"]

// Put banana back
fruits.splice(1, 0, "banana");

console.log(fruits);
// Output: ["apple", "banana", "orange"]

// ==========================================
// 13. concat()
// Combines arrays
// ==========================================

let moreFruits = ["mango", "grape"];

console.log(fruits.concat(moreFruits));
// Output: ["apple", "banana", "orange", "mango", "grape"]

// ==========================================
// 14. join()
// Converts an array into a string
// ==========================================

console.log(fruits.join());
// Output: apple,banana,orange

console.log(fruits.join(" - "));
// Output: apple - banana - orange

console.log(fruits.join(""));
// Output: applebananaorange

// ==========================================
// 15. reverse()
// Reverses the array
// DOES change the original array
// ==========================================

fruits.reverse();

console.log(fruits);
// Output: ["orange", "banana", "apple"]

// Put it back in the original order
fruits.reverse();

// ==========================================
// 16. toReversed()
// Reverses the array
// Does NOT change the original array
// ==========================================

console.log(fruits.toReversed());
// Output: ["orange", "banana", "apple"]

console.log(fruits);
// Output: ["apple", "banana", "orange"]

// ==========================================
// 17. sort()
// Sorts the array
// ==========================================

fruits.sort();

console.log(fruits);
// Output: ["apple", "banana", "orange"]

// ==========================================
// 18. toSorted()
// Sorts without changing the original array
// ==========================================

console.log(fruits.toSorted());
// Output: ["apple", "banana", "orange"]

// ==========================================
// 19. toString()
// Converts the array into a string
// ==========================================

console.log(fruits.toString());
// Output: apple,banana,orange

// ==========================================
// 20. forEach()
// Runs a function for every item
// ==========================================

fruits.forEach(function (fruit) {
  console.log(fruit);
});

// Output:
// apple
// banana
// orange

// ==========================================
// 21. map()
// Creates a NEW array by changing each item
// ==========================================

let upperFruits = fruits.map(function (fruit) {
  return fruit.toUpperCase();
});

console.log(upperFruits);
// Output: ["APPLE", "BANANA", "ORANGE"]

// ==========================================
// 22. filter()
// Creates a new array containing matching items
// ==========================================

let longFruits = fruits.filter(function (fruit) {
  return fruit.length > 5;
});

console.log(longFruits);
// Output: ["banana", "orange"]

// ==========================================
// 23. find()
// Finds the FIRST item that matches a condition
// ==========================================

let foundFruit = fruits.find(function (fruit) {
  return fruit.length > 5;
});

console.log(foundFruit);
// Output: banana

// ==========================================
// 24. findIndex()
// Finds the INDEX of the first matching item
// ==========================================

let foundIndex = fruits.findIndex(function (fruit) {
  return fruit.length > 5;
});

console.log(foundIndex);
// Output: 1

// ==========================================
// 25. findLast()
// Finds the LAST item that matches
// ==========================================

let lastFruit = fruits.findLast(function (fruit) {
  return fruit.length > 5;
});

console.log(lastFruit);
// Output: orange

// ==========================================
// 26. findLastIndex()
// Finds the INDEX of the last matching item
// ==========================================

let lastIndex = fruits.findLastIndex(function (fruit) {
  return fruit.length > 5;
});

console.log(lastIndex);
// Output: 2

// ==========================================
// 27. some()
// Checks if AT LEAST ONE item matches
// ==========================================

console.log(
  fruits.some(function (fruit) {
    return fruit === "banana";
  }),
);

// Output: true

// ==========================================
// 28. every()
// Checks if ALL items match
// ==========================================

console.log(
  fruits.every(function (fruit) {
    return fruit.length > 3;
  }),
);

// Output: true

// ==========================================
// 29. flat()
// Flattens nested arrays
// ==========================================

let nestedFruits = [
  ["apple", "banana"],
  ["orange", "mango"],
];

console.log(nestedFruits.flat());

// Output:
// ["apple", "banana", "orange", "mango"]

// ==========================================
// 30. flatMap()
// map() + flat()
// ==========================================

let fruitLetters = fruits.flatMap(function (fruit) {
  return [fruit, fruit.length];
});

console.log(fruitLetters);

// Output:
// ["apple", 5, "banana", 6, "orange", 6]

// ==========================================
// 31. Array.isArray()
// Checks if something is an array
// ==========================================

console.log(Array.isArray(fruits));
// Output: true

console.log(Array.isArray("apple"));
// Output: false

// ==========================================
// 32. Array.from()
// Creates an array from another iterable/value
// ==========================================

let letters = Array.from("apple");

console.log(letters);

// Output:
// ["a", "p", "p", "l", "e"]

// ==========================================
// 33. Array.of()
// Creates an array from values
// ==========================================

let numbers = Array.of(10, 20, 30);

console.log(numbers);

// Output:
// [10, 20, 30]

// ==========================================
// 34. fill()
// Fills array items with a value
// DOES change the array
// ==========================================

let testFruits = ["apple", "banana", "orange"];

testFruits.fill("mango");

console.log(testFruits);

// Output:
// ["mango", "mango", "mango"]

// ==========================================
// 35. copyWithin()
// Copies part of an array to another position
// ==========================================

let testArray = ["apple", "banana", "orange"];

testArray.copyWithin(1, 0);

console.log(testArray);

// Output:
// ["apple", "apple", "banana"]
