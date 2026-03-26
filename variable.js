// const account =2345;
// let accountemail ="vba@gmail.com"
// var accountpass ="23"
// accountcity ="jaipu"
// console.log(account);
// console.table([account,accountemail]);
// console.log(undefined >=0);

 
// Array
//  An array in JavaScript is a special variable used to store multiple values in a single container.
// Nested objects	Shared reference	Fully copied
// Performance	Faster	Slower
// Memory usage	Less	More
// Safe for mutation	❌ No	✅ Yes
// Shallow copy = Copy of a house, but same furniture inside
// Deep copy = Copy of house + completely new furniture

const arr =[1,2,4,6,7,8]
const newarr =["sfse","sefs","Sfsf"]
console.log(arr); 
console.log(typeof newarr[2])



const myarr2 =new Array(1,2,3,4,5)
console.log(myarr2)

myarr2.push(6)
console.log(myarr2)

myarr2.pop()
console.log(myarr2)         
myarr2.unshift(9)       
console.log(myarr2) 
myarr2.shift()
console.log(myarr2)



const marvel_hero =["ironman","thor","hulk","captain america"] 
const dc_hero =["superman","batman","flash","aquaman"]
marvel_hero.push(dc_hero)  //push and concat gives same result but concaat return new array
console.log(marvel_hero)
console.log(marvel_hero[4][0]) // to access superman

