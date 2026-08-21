let age = 25;
let password = "London1234!=@";

// ==========================================
// 1. length
// ==========================================

console.log(password.length);
// Output: 13

// ==========================================
// 2. charAt()
// Gets the character at a specific position
// ==========================================

console.log(password.charAt(0));
// Output: L

console.log(password.charAt(6));
// Output: 1

console.log(password.charAt(11));
// Output: =

// ==========================================
// 3. charCodeAt()
// Gets the Unicode number of a character
// ==========================================

console.log(password.charCodeAt(0));
// Output: 76

console.log(password.charCodeAt(6));
// Output: 49

// ==========================================
// 4. at()
// Gets a character using its index
// Supports negative indexes
// ==========================================

console.log(password.at(0));
// Output: L

console.log(password.at(-1));
// Output: @

console.log(password.at(-2));
// Output: =

// ==========================================
// 5. indexOf()
// Finds the position of a character/string
// ==========================================

console.log(password.indexOf("="));
// Output: 11

console.log(password.indexOf("London"));
// Output: 0

console.log(password.indexOf("123"));
// Output: 6

console.log(password.indexOf("#"));
// Output: -1

// ==========================================
// 6. lastIndexOf()
// Finds the last occurrence
// ==========================================

console.log(password.lastIndexOf("o"));
// Output: 4

console.log(password.lastIndexOf("1"));
// Output: 6

// ==========================================
// 7. includes()
// Checks if something exists
// Returns true or false
// ==========================================

console.log(password.includes("London"));
// Output: true

console.log(password.includes("="));
// Output: true

console.log(password.includes("#"));
// Output: false

// ==========================================
// 8. startsWith()
// Checks whether the string starts with something
// ==========================================

console.log(password.startsWith("London"));
// Output: true

console.log(password.startsWith("123"));
// Output: false

// ==========================================
// 9. endsWith()
// Checks whether the string ends with something
// ==========================================

console.log(password.endsWith("@"));
// Output: true

console.log(password.endsWith("123"));
// Output: false

// ==========================================
// 10. slice()
// Extracts part of a string
// ==========================================

console.log(password.slice(0, 6));
// Output: London

console.log(password.slice(6, 10));
// Output: 1234

console.log(password.slice(-3));
// Output: !=@

// ==========================================
// 11. substring()
// Extracts characters between two indexes
// ==========================================

console.log(password.substring(0, 6));
// Output: London

console.log(password.substring(6, 10));
// Output: 1234

// ==========================================
// 12. substr()
// OLD / DEPRECATED METHOD
// ==========================================

console.log(password.substr(0, 6));
// Output: London

console.log(password.substr(6, 4));
// Output: 1234

// ==========================================
// 13. toUpperCase()
// Converts everything to uppercase
// ==========================================

console.log(password.toUpperCase());
// Output: LONDON1234!=@

// ==========================================
// 14. toLowerCase()
// Converts everything to lowercase
// ==========================================

console.log(password.toLowerCase());
// Output: london1234!=@

// ==========================================
// 15. concat()
// Joins strings together
// ==========================================

console.log(password.concat("123"));
// Output: London1234!=@123

console.log(password.concat("ABC"));
// Output: London1234!=@ABC

// ==========================================
// 16. repeat()
// Repeats a string
// ==========================================

console.log(password.repeat(2));
// Output: London1234!=@London1234!=@

// ==========================================
// 17. replace()
// Replaces the first matching value
// ==========================================

console.log(password.replace("London", "Manchester"));
// Output: Manchester1234!=@

// ==========================================
// 18. replaceAll()
// Replaces all matching values
// ==========================================

console.log(password.replaceAll("o", "O"));
// Output: LOndOn1234!=@

// ==========================================
// 19. trim()
// Removes spaces from beginning and end
// ==========================================

let passwordWithSpaces = "   London1234!=@   ";

console.log(passwordWithSpaces.trim());
// Output: London1234!=@

// ==========================================
// 20. trimStart()
// Removes spaces from the beginning
// ==========================================

console.log(passwordWithSpaces.trimStart());
// Output: London1234!=@

// ==========================================
// 21. trimEnd()
// Removes spaces from the end
// ==========================================

console.log(passwordWithSpaces.trimEnd());
// Output:    London1234!=@

// ==========================================
// 22. padStart()
// Adds characters to the beginning
// ==========================================

console.log(password.padStart(16, "*"));
// Output: ***London1234!=@

// ==========================================
// 23. padEnd()
// Adds characters to the end
// ==========================================

console.log(password.padEnd(16, "*"));
// Output: London1234!=@***

// ==========================================
// 24. split()
// Converts a string into an array
// ==========================================

console.log(password.split(""));
// Output: ["L", "o", "n", "d", "o", "n", "1", "2", "3", "4", "!", "=", "@"]

console.log(password.split("1234"));
// Output: ["London", "!=@"]

// ==========================================
// 25. search()
// Searches using a string or regular expression
// ==========================================

console.log(password.search("="));
// Output: 11

console.log(password.search(/[0-9]/));
// Output: 6

// ==========================================
// 26. match()
// Finds matches using a regular expression
// ==========================================

console.log(password.match(/[0-9]/));
// Output: ["1"]

console.log(password.match(/[0-9]+/));
// Output: ["1234"]

// ==========================================
// 27. matchAll()
// Finds all matches
// Returns an iterator
// ==========================================

console.log([...password.matchAll(/[0-9]/g)]);
// Output: [
//   ["1"],
//   ["2"],
//   ["3"],
//   ["4"]
// ]

// ==========================================
// 28. localeCompare()
// Compares two strings
// ==========================================

console.log(password.localeCompare("London1234!=@"));
// Output: 0

// 0 means both strings are equal

// ==========================================
// 29. toString()
// Converts a value to a string
// ==========================================

console.log(age.toString());
// Output: "25"

// ==========================================
// 30. valueOf()
// Returns the primitive value of the string
// ==========================================

console.log(password.valueOf());
// Output: London1234!=@

// ==========================================
// 31. String()
// Converts something into a string
// ==========================================

console.log(String(age));
// Output: "25"

console.log(String(1234));
// Output: "1234"

// ==========================================
// 32. String.raw()
// Creates a raw string
// Mostly useful with template literals
// ==========================================

console.log(String.raw`Password: ${password}`);
// Output: Password: London1234!=@
