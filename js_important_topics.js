// ============================================================================
// JAVASCRIPT IMPORTANT TOPICS - BASIC TO ADVANCED WITH EXAMPLES & DEFINITIONS
// ============================================================================

// ============================================================================
// 1. VARIABLES AND DATA TYPES
// ============================================================================

// Variables: Containers for storing data values
// Three ways to declare variables:

var olderWay = "var has function scope"; // Older way, avoid using
let modernWay = "let has block scope"; // Modern way, preferred
const constantValue = "const cannot be reassigned"; // For constants

// Data Types in JavaScript:
// 1. Primitive Types (immutable)
let numberType = 42; // Number - integers and floats
let stringType = "Hello World"; // String - text data
let booleanType = true; // Boolean - true or false
let undefinedType; // Undefined - variable declared but not assigned
let nullType = null; // Null - intentional empty value
let symbolType = Symbol("unique"); // Symbol - unique identifiers (ES6)
let bigIntType = 123456789012345678901234567890n; // BigInt - large numbers (ES2020)

// 2. Reference Types (mutable)
let objectType = { name: "John", age: 30 }; // Object
let arrayType = [1, 2, 3, 4, 5]; // Array
let functionType = function() { return "I'm a function"; }; // Function

// Type checking
console.log(typeof numberType); // "number"
console.log(typeof stringType); // "string"
console.log(Array.isArray(arrayType)); // true

// ============================================================================
// 2. OPERATORS
// ============================================================================

// Arithmetic Operators
let a = 10, b = 3;
console.log(a + b); // 13 (Addition)
console.log(a - b); // 7 (Subtraction)
console.log(a * b); // 30 (Multiplication)
console.log(a / b); // 3.33... (Division)
console.log(a % b); // 1 (Modulus - remainder)
console.log(a ** b); // 1000 (Exponentiation)

// Assignment Operators
let x = 5;
x += 3; // x = x + 3 → 8
x -= 2; // x = x - 2 → 6
x *= 2; // x = x * 2 → 12
x /= 3; // x = x / 3 → 4

// Comparison Operators
console.log(5 == "5"); // true (loose equality - type coercion)
console.log(5 === "5"); // false (strict equality - no type coercion)
console.log(5 != "5"); // false (loose inequality)
console.log(5 !== "5"); // true (strict inequality)
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 5); // true
console.log(10 <= 5); // false

// Logical Operators
console.log(true && false); // false (AND - both must be true)
console.log(true || false); // true (OR - at least one must be true)
console.log(!true); // false (NOT - negation)

// Ternary Operator (Conditional Operator)
let age = 20;
let status = age >= 18 ? "Adult" : "Minor"; // condition ? trueValue : falseValue

// ============================================================================
// 3. CONTROL STRUCTURES (IF/ELSE, SWITCH, LOOPS)
// ============================================================================

// IF/ELSE Statement
let score = 75;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// SWITCH Statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Unknown day");
}

// FOR Loop - executes block of code multiple times
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// WHILE Loop - repeats while condition is true
let counter = 0;
while (counter < 3) {
    console.log(counter);
    counter++;
}

// DO-WHILE Loop - executes once, then repeats while condition is true
let num = 0;
do {
    console.log(num);
    num++;
} while (num < 3);

// FOR-IN Loop - iterates over object properties
let person = { name: "John", age: 30 };
for (let key in person) {
    console.log(key + ": " + person[key]); // name: John, age: 30
}

// FOR-OF Loop - iterates over values (arrays, strings, etc.)
let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color); // red, green, blue
}

// Break and Continue
for (let i = 0; i < 10; i++) {
    if (i === 3) continue; // Skip this iteration
    if (i === 7) break; // Exit the loop
    console.log(i); // 0, 1, 2, 4, 5, 6
}

// ============================================================================
// 4. FUNCTIONS
// ============================================================================

// Function Definition
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice")); // "Hello, Alice!"

// Function Expression
const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3)); // 8

// Arrow Function (ES6) - shorter syntax
const multiply = (a, b) => a * b;
console.log(multiply(4, 3)); // 12

// Arrow function with multiple lines
const divide = (a, b) => {
    if (b === 0) return "Cannot divide by zero";
    return a / b;
};

// Default Parameters
function introduce(name = "Guest", age = 0) {
    console.log(`Name: ${name}, Age: ${age}`);
}
introduce(); // Name: Guest, Age: 0
introduce("John"); // Name: John, Age: 0
introduce("John", 25); // Name: John, Age: 25

// Rest Parameters - capture multiple arguments into an array
function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log(sum(1, 2, 3, 4, 5)); // 15

// Spread Operator - spreads array elements
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Higher-Order Functions - functions that take/return functions
function applyOperation(a, b, operation) {
    return operation(a, b);
}
console.log(applyOperation(5, 3, (x, y) => x + y)); // 8

// ============================================================================
// 5. ARRAYS AND ARRAY METHODS
// ============================================================================

// Array Declaration
let fruits = ["apple", "banana", "orange"];

// Array Methods - Mutating (modify original array)
fruits.push("grape"); // Add to end
fruits.pop(); // Remove from end
fruits.unshift("mango"); // Add to beginning
fruits.shift(); // Remove from beginning
fruits.splice(1, 1); // Remove 1 element at index 1

// Array Methods - Non-Mutating (return new array)
let numbers = [1, 2, 3, 4, 5];

// MAP: Transform each element
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// FILTER: Keep elements that pass test
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// REDUCE: Combine all elements into single value
let sum_result = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum_result); // 15

// FIND: Return first element that passes test
let firstGreaterThanThree = numbers.find(num => num > 3);
console.log(firstGreaterThanThree); // 4

// SOME: Check if any element passes test
let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true

// EVERY: Check if all elements pass test
let allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true

// INDEXOF: Find index of element
console.log(numbers.indexOf(3)); // 2

// INCLUDES: Check if array contains element
console.log(numbers.includes(3)); // true

// SLICE: Extract portion of array
let sliced = numbers.slice(1, 4); // [2, 3, 4] (doesn't include index 4)

// JOIN: Convert array to string
let joined = fruits.join(", "); // "apple, banana, orange"

// REVERSE: Reverse array (mutating)
let reversed = [...numbers].reverse(); // [5, 4, 3, 2, 1]

// SORT: Sort array (mutating)
let sorted = [...numbers].sort((a, b) => a - b); // [1, 2, 3, 4, 5]

// ============================================================================
// 6. OBJECTS
// ============================================================================

// Object Declaration
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2023,
    
    // Method (function inside object)
    describe: function() {
        return this.brand + " " + this.model;
    }
};

// Accessing Object Properties
console.log(car.brand); // "Toyota" (dot notation)
console.log(car["model"]); // "Camry" (bracket notation)

// Adding/Modifying Properties
car.color = "blue"; // Add new property
car.year = 2024; // Modify existing property

// Deleting Properties
delete car.color;

// Checking if property exists
console.log("brand" in car); // true
console.log(car.hasOwnProperty("year")); // true

// Getting all keys, values, entries
console.log(Object.keys(car)); // ['brand', 'model', 'year', 'describe']
console.log(Object.values(car)); // ['Toyota', 'Camry', 2023, function...]
console.log(Object.entries(car)); // [['brand', 'Toyota'], ...]

// Object Destructuring - extract properties into variables
let { brand, model } = car;
console.log(brand); // "Toyota"

// Nested Objects
let user = {
    name: "John",
    address: {
        city: "New York",
        zip: "10001"
    }
};
console.log(user.address.city); // "New York"

// Object Spread
let carCopy = { ...car, color: "red" }; // Copy with new property

// ============================================================================
// 7. THIS KEYWORD
// ============================================================================

// THIS refers to the object it belongs to
let student = {
    name: "Alice",
    getInfo: function() {
        return "Student: " + this.name; // THIS = student object
    }
};
console.log(student.getInfo()); // "Student: Alice"

// THIS in regular function (global context)
function whoAmI() {
    console.log(this); // In browser: window object, In Node.js: global
}

// THIS in arrow function (inherits from parent scope)
let obj = {
    name: "Bob",
    arrow: () => {
        console.log(this); // THIS is parent scope, not obj
    }
};

// CALL, APPLY, BIND - control what THIS refers to
function introduce_func(greeting) {
    return greeting + ", my name is " + this.name;
}

let person1 = { name: "John" };
let person2 = { name: "Jane" };

console.log(introduce_func.call(person1, "Hi")); // "Hi, my name is John"
console.log(introduce_func.apply(person2, ["Hello"])); // "Hello, my name is Jane"

let boundFunc = introduce_func.bind(person1, "Hey");
console.log(boundFunc()); // "Hey, my name is John"

// ============================================================================
// 8. SCOPE AND CLOSURE
// ============================================================================

// SCOPE: Determines where variables are accessible

// Global Scope
var globalVar = "I'm global";

function testScope() {
    // Function Scope (local scope)
    let localVar = "I'm local";
    
    if (true) {
        // Block Scope (ES6 let/const)
        let blockVar = "I'm only in this block";
        console.log(globalVar); // Can access global
        console.log(localVar); // Can access function scope
        console.log(blockVar); // Can access block scope
    }
    
    // console.log(blockVar); // ERROR: blockVar not accessible here
}

// CLOSURE: Function that has access to outer function's variables
function outer() {
    let count = 0; // Outer function variable
    
    function inner() {
        count++; // Inner function can access outer variable
        return count;
    }
    
    return inner;
}

let counter_func = outer();
console.log(counter_func()); // 1
console.log(counter_func()); // 2
console.log(counter_func()); // 3

// Practical closure example: private variable
function createBankAccount(initialBalance) {
    let balance = initialBalance; // Private variable
    
    return {
        deposit: function(amount) {
            balance += amount;
            return "Deposited: " + amount + ", Balance: " + balance;
        },
        withdraw: function(amount) {
            balance -= amount;
            return "Withdrew: " + amount + ", Balance: " + balance;
        },
        getBalance: function() {
            return balance;
        }
    };
}

let account = createBankAccount(1000);
console.log(account.deposit(500)); // Deposited: 500, Balance: 1500
console.log(account.withdraw(200)); // Withdrew: 200, Balance: 1300
console.log(account.getBalance()); // 1300
// console.log(account.balance); // undefined - balance is private

// ============================================================================
// 9. CLASSES AND OOP (Object-Oriented Programming)
// ============================================================================

// CLASS: Blueprint for creating objects (ES6)
class Animal {
    // Constructor: runs when creating new instance
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    // Method
    speak() {
        return this.name + " makes a sound";
    }
    
    // Static method (belongs to class, not instance)
    static info() {
        return "I'm the Animal class";
    }
    
    // Getter
    get description() {
        return this.name + " is " + this.age + " years old";
    }
    
    // Setter
    set age(newAge) {
        if (newAge > 0) {
            this._age = newAge;
        }
    }
    
    get age() {
        return this._age;
    }
}

let dog = new Animal("Max", 5);
console.log(dog.name); // "Max"
console.log(dog.speak()); // "Max makes a sound"
console.log(dog.description); // "Max is 5 years old"
console.log(Animal.info()); // "I'm the Animal class"

// INHERITANCE: Extend class to create subclass
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age); // Call parent constructor
        this.breed = breed;
    }
    
    speak() {
        return this.name + " barks"; // Override parent method
    }
}

let myDog = new Dog("Rex", 3, "Labrador");
console.log(myDog.speak()); // "Rex barks"
console.log(myDog.breed); // "Labrador"

// ============================================================================
// 10. ERROR HANDLING
// ============================================================================

// TRY-CATCH: Handle errors gracefully
try {
    let result = riskyFunction(); // May throw error
    console.log(result);
} catch (error) {
    console.log("Error caught: " + error.message);
} finally {
    console.log("This runs regardless of error"); // Optional
}

// Throwing custom errors
function validateAge(age) {
    if (age < 0) {
        throw new Error("Age cannot be negative");
    }
    return true;
}

try {
    validateAge(-5);
} catch (error) {
    console.log(error.message); // "Age cannot be negative"
}

// Different error types
// try {
//     JSON.parse("invalid json"); // SyntaxError
//     undefined.property; // TypeError
//     nonexistentFunction(); // ReferenceError
// } catch (error) {
//     console.log(error.name); // Shows error type
// }

function riskyFunction() {
    // This would throw an error in real scenario
    return "Safe";
}

// ============================================================================
// 11. PROMISES (Async Programming)
// ============================================================================

// PROMISE: Represents eventual completion/failure of async operation
// States: pending, fulfilled (resolved), rejected

// Creating a Promise
let myPromise = new Promise((resolve, reject) => {
    let success = true;
    
    setTimeout(() => {
        if (success) {
            resolve("Operation successful!"); // 2. Fulfilled
        } else {
            reject("Operation failed!"); // 2. Rejected
        }
    }, 1000);
    // 1. Pending (while setTimeout is running)
});

// Using Promise with .then() and .catch()
myPromise
    .then(result => {
        console.log(result); // Runs if resolved
        return result;
    })
    .catch(error => {
        console.log(error); // Runs if rejected
    })
    .finally(() => {
        console.log("Promise settled"); // Runs after then/catch
    });

// Promise.all() - wait for all promises
let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
    .then(values => {
        console.log(values); // [1, 2, 3]
    });

// Promise.race() - return first settled promise
Promise.race([p1, p2, p3])
    .then(value => {
        console.log(value); // 1 (first to resolve)
    });

// ============================================================================
// 12. ASYNC/AWAIT (Modern Async Programming)
// ============================================================================

// ASYNC: Function that returns Promise
async function fetchData() {
    return "Data loaded"; // Automatically wrapped in Promise
}

// AWAIT: Pauses execution until Promise settles
async function getData() {
    try {
        let result = await fetchData(); // Wait for Promise
        console.log(result); // "Data loaded"
    } catch (error) {
        console.log(error);
    }
}

// Simulated API call
function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "John", email: "john@example.com" });
        }, 2000);
    });
}

async function displayUser() {
    console.log("Fetching user...");
    let user = await getUser(); // Wait 2 seconds
    console.log(user); // { id: 1, name: "John", email: "john@example.com" }
}

// ============================================================================
// 13. DESTRUCTURING
// ============================================================================

// Array Destructuring
let [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

// Object Destructuring
let { name: personName, age: personAge } = { name: "Alice", age: 30 };
console.log(personName); // "Alice"
console.log(personAge); // 30

// Default values in destructuring
let { country = "USA" } = { name: "Bob" };
console.log(country); // "USA" (used default since not provided)

// Nested destructuring
let { address: { city, zip } } = {
    name: "Charlie",
    address: { city: "Boston", zip: "02101" }
};
console.log(city); // "Boston"

// ============================================================================
// 14. TEMPLATE LITERALS (Template Strings)
// ============================================================================

// Using backticks and ${} for variable interpolation
let firstName = "John";
let lastName = "Doe";
let greeting_template = `Hello, ${firstName} ${lastName}!`;
console.log(greeting_template); // "Hello, John Doe!"

// Multi-line strings
let multiline = `
    This is a
    multi-line
    string
`;
console.log(multiline);

// Expressions in template literals
let x_temp = 10;
let y_temp = 20;
console.log(`Sum: ${x_temp + y_temp}`); // "Sum: 30"

// ============================================================================
// 15. SET AND MAP
// ============================================================================

// SET: Collection of unique values
let mySet = new Set([1, 2, 3, 3, 4, 4, 5]);
console.log(mySet); // Set(5) { 1, 2, 3, 4, 5 } - duplicates removed
mySet.add(6);
mySet.delete(3);
console.log(mySet.has(2)); // true
console.log(mySet.size); // 5

// MAP: Collection of key-value pairs
let myMap = new Map();
myMap.set("key1", "value1");
myMap.set("key2", "value2");
console.log(myMap.get("key1")); // "value1"
console.log(myMap.has("key1")); // true
myMap.delete("key1");
console.log(myMap.size); // 1

// ============================================================================
// 16. CALLBACK FUNCTIONS
// ============================================================================

// CALLBACK: Function passed to another function
function greetPerson(name, callback) {
    console.log("Hello, " + name);
    callback(); // Execute the callback function
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greetPerson("Alice", sayGoodbye); // Callback Hell example (avoid this)

// Callback with parameters
function calculate(a, b, operation) {
    return operation(a, b);
}

function add_cb(x, y) {
    return x + y;
}

console.log(calculate(5, 3, add_cb)); // 8

// ============================================================================
// 17. JSON (JavaScript Object Notation)
// ============================================================================

// JSON: Format for data exchange (strings only, no functions)
let jsonString = '{"name":"John","age":30,"city":"New York"}';

// Parse JSON string to object
let obj_json = JSON.parse(jsonString);
console.log(obj_json.name); // "John"

// Convert object to JSON string
let person_json = { name: "Jane", age: 25 };
let stringified = JSON.stringify(person_json);
console.log(stringified); // '{"name":"Jane","age":25}'

// Pretty print JSON (with 2-space indentation)
console.log(JSON.stringify(person_json, null, 2));

// ============================================================================
// 18. REGULAR EXPRESSIONS (RegEx)
// ============================================================================

// RegEx: Pattern matching for strings
let pattern = /hello/i; // 'i' = case insensitive
console.log(pattern.test("Hello World")); // true

// Create RegEx from string
let regex = new RegExp("world", "i");
console.log(regex.test("Hello World")); // true

// String methods with RegEx
let text = "The price is $100 and $200";

// MATCH: Find all matches
let matches = text.match(/\$\d+/g); // g = global
console.log(matches); // ['$100', '$200']

// REPLACE: Replace matches
let replaced = text.replace(/\$(\d+)/g, "$$$1"); // $$ escapes $
console.log(replaced); // "The price is $$100 and $$200"

// SPLIT: Split string by pattern
let split_result = "apple,banana;orange".split(/[,;]/);
console.log(split_result); // ['apple', 'banana', 'orange']

// Common RegEx patterns
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email validation
console.log(emailPattern.test("user@example.com")); // true

// ============================================================================
// 19. ARRAY DESTRUCTURING WITH FUNCTIONS
// ============================================================================

// Function returning multiple values
function getCoordinates() {
    return [10, 20]; // Return array
}

let [xCoord, yCoord] = getCoordinates();
console.log(xCoord, yCoord); // 10, 20

// Function with destructured parameters
function printCoordinates([x, y]) {
    console.log(`X: ${x}, Y: ${y}`);
}
printCoordinates([5, 15]); // X: 5, Y: 15

// ============================================================================
// 20. HOISTING
// ============================================================================

// HOISTING: Variables and functions are moved to top before execution

// Function hoisting (works - functions can be called before declaration)
console.log(add_hoisted(5, 3)); // 8 - function hoisted

function add_hoisted(a, b) {
    return a + b;
}

// Variable hoisting with VAR (initialized as undefined)
console.log(x_hoisted); // undefined (not an error!)

var x_hoisted = 5;

console.log(x_hoisted); // 5

// Variable hoisting with LET/CONST (Temporal Dead Zone)
// console.log(y_hoisted); // ReferenceError: y_hoisted is not defined
let y_hoisted = 10;

// ============================================================================
// 21. COMMON ARRAY AND STRING METHODS
// ============================================================================

// STRING METHODS
let str = "JavaScript is powerful";

console.log(str.length); // 23 (length property)
console.log(str.toUpperCase()); // "JAVASCRIPT IS POWERFUL"
console.log(str.toLowerCase()); // "javascript is powerful"
console.log(str.charAt(0)); // "J"
console.log(str.charCodeAt(0)); // 74 (Unicode)
console.log(str.indexOf("is")); // 11
console.log(str.substring(0, 10)); // "JavaScript"
console.log(str.slice(0, 10)); // "JavaScript"
console.log(str.includes("powerful")); // true
console.log(str.startsWith("JavaScript")); // true
console.log(str.endsWith("powerful")); // true
console.log(str.repeat(2)); // "JavaScript is powerfulJavaScript is powerful"
console.log(str.trim()); // Removes whitespace from both ends
console.log(str.split(" ")); // ["JavaScript", "is", "powerful"]
console.log(str.replace("powerful", "amazing")); // "JavaScript is amazing"

// ============================================================================
// 22. COMPARISON: var vs let vs const
// ============================================================================

// VAR:
// - Function scope
// - Can be redeclared and reassigned
// - Hoisted (initialized as undefined)
// - Avoid using in modern JavaScript

var varVar = 1;
var varVar = 2; // Allowed

// LET:
// - Block scope (if, for, {})
// - Can be reassigned but not redeclared
// - Hoisted but Temporal Dead Zone
// - Preferred for variables that change

let letVar = 1;
letVar = 2; // Allowed
// let letVar = 3; // Error: Identifier 'letVar' has already been declared

// CONST:
// - Block scope
// - Cannot be reassigned or redeclared
// - Must be initialized when declared
// - Preferred for constants and references

const constVar = 1;
// constVar = 2; // Error: Assignment to constant variable

// CONST object properties CAN be changed (object is constant, not properties)
const obj_const = { name: "John" };
obj_const.name = "Jane"; // Allowed
// obj_const = {}; // Error: Assignment to constant variable

// ============================================================================
// 23. SHORTHAND PROPERTIES AND METHODS
// ============================================================================

let name_short = "John";
let age_short = 30;

// Shorthand property names
let person_short = { name_short, age_short };
console.log(person_short); // { name_short: 'John', age_short: 30 }

// Shorthand method definition
let calculator = {
    value: 0,
    add(n) { // Instead of add: function(n)
        return this.value + n;
    },
    subtract(n) {
        return this.value - n;
    }
};
console.log(calculator.add(5)); // 5

// ============================================================================
// 24. OPTIONAL CHAINING AND NULLISH COALESCING
// ============================================================================

// OPTIONAL CHAINING (?.)
let user_optional = {
    name: "John",
    address: {
        city: "New York"
    }
};

console.log(user_optional?.name); // "John" (safe access)
console.log(user_optional?.phone?.number); // undefined (safe, no error)

// NULLISH COALESCING (??)
let firstName_null = null;
let defaultName = firstName_null ?? "Guest"; // Use default if null/undefined
console.log(defaultName); // "Guest"

let lastName_null = "Doe";
let defaultLastName = lastName_null ?? "Unknown"; // Use value if not null/undefined
console.log(defaultLastName); // "Doe"

// ============================================================================
// 25. DYNAMIC FUNCTION CALLS AND EVAL (Not Recommended)
// ============================================================================

// Using function constructors (not recommended for security)
let funcStr = "a + b";
let dynamicFunc = new Function("a", "b", `return ${funcStr}`);
console.log(dynamicFunc(5, 3)); // 8

// EVAL (NEVER use in production - security risk and performance issue)
// let result = eval("2 + 2"); // Extremely dangerous!

// ============================================================================
// 26. MODULES (ES6 Modules)
// ============================================================================

// Export: Make code available to other files
// export const greetUser = (name) => `Hello, ${name}!`;
// export class User { }
// export default someFunction;

// Import: Use exported code from other files
// import someFunction, { greetUser, User } from './module.js';

// ============================================================================
// 27. KEY TAKEAWAYS AND BEST PRACTICES
// ============================================================================

/*
BEST PRACTICES:

1. Use LET and CONST instead of VAR
   - Provides better scope management and prevents bugs

2. Use ARROW FUNCTIONS for callbacks and simple operations
   - Cleaner syntax and binds THIS from parent scope

3. Use CONST by default, LET when you need to reassign
   - Makes code more predictable

4. Always use STRICT EQUALITY (===) instead of loose equality (==)
   - Prevents type coercion bugs

5. Handle ERRORS properly with try-catch and Promise.catch()
   - Prevents unexpected crashes

6. Use ASYNC/AWAIT instead of .then() chains
   - Cleaner, more readable code

7. Avoid GLOBAL variables
   - Use function/block scope to prevent conflicts

8. Use MEANINGFUL variable and function names
   - Code should be self-documenting

9. ADD COMMENTS for complex logic
   - Help other developers understand your code

10. Use DESTRUCTURING to access object/array values
    - More concise and readable code

11. Use MODERN FEATURES like spread operator, template literals
    - Cleaner, more efficient code

12. VALIDATE input and HANDLE edge cases
    - Make code more robust
*/

console.log("=== JavaScript Basics to Advanced Topics Complete ===");
