// function addTwoNumber(x,y){
//     let result =x+y
//     return result


// }
// let result = addTwoNumber(5, 3)
// console.log(result);

// console.log(addTwoNumber(5, 3))



// function userLoggedIn(user){
//     if(user ===undefined){             //!user means same as user ===undefined
//         return "Please enter username"
//     }
//     return `HI! welcome ${user}`

// }
// let welcomeMessage =userLoggedIn()
// console.log(welcomeMessage)


// function sumCartPrice(...item){
//     let total = 0;
//     for (let price of item) {
//         total += price;
//     }
//     return total;
// }

// let price = sumCartPrice(200, 325, 50, 5, 52)
// // console.log(sumCartPrice(200, 325, 50, 5, 52))
// console.log(price);


// n =10
// console.log(x);

// 💡 What’s happening?
// parent() runs → creates count
// It returns child
// Normally, parent should be gone ❌
// BUT child still remembers count ✅

// 👉 That memory is called a closure

// 🔁 Parent–Child Relationship Summary
// Concept	Meaning
// Lexical Scope	Child can access parent variables
// Closure	Child keeps access even after parent is finished
// 🧩 Simple Analogy
// Parent = House 🏠
// Child = Person 👦
// Lexical Scope:

// Child can use things inside the house.

// Closure:

// Even if the house is “closed”, child still has the keys 🔑.


// function parent() {
//     let count = 0;

//     function child() {
//         count++;
//         console.log(count);
//     }

//     return child;
// }

// const fn = parent();

// fn();
// fn();


// function  one(){
//     let age =23

//     function two(){
//         let name ="varun"
//         console.log(age);

//     }
//     two()
//     //  console.log(name); // name is not defined because it is in two function scope
// }
// one()


// if(true){
//     let name ="varun"

//     if(name===  "varun"){
//         let city ="delhi"
//         console.log(name+city);
//     }
//     // console.log(city);
// }

// console.log(name)


const user={
    name:"varun",   
    greet: ()=>{
        console.log(this.name);
    }

}
user.greet()