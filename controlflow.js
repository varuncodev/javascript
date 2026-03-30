// // // const islogged =true

// // // if(islogged){
// // //     console.log("login success");
// // // }


// // const month =4;
// // switch (month){
// //     case 1:
// //         console.log("janhuary");
// //         break;
// //     case 2:
// //          console.log("februrary");
// //          break;
// //     case 3:
// //         console.log("march");
// //          break;
// //     case 4:
// //         console.log("april");
// //           break;

// //     case 5:
// //          console.log("may");
// //           break;

// //     default:
// //        console.log(" default case");
// //        break;

// // }






// // const userEmail ="Email@gmail.com"
// // if(userEmail){
// //     console.log("Got Email");
// // }else{
// //     console.log("Email not found");
// // }



// // object literals

// let obj ={
//     name: "varun",
//     age: 23,
//     passion:"coding",

//     greet :function(){
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. My passion is ${this.passion}`);

//     }
// }

// obj.greet();





// //Factory function

// function createUser(name,age,passion){
//     return{
//         name:name,
//         age:age,
//         passion:passion,
//         greet: function(){
//             console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. My passion is ${this.passion}`);
//         }
//     }
// }

// let user1 = createUser("Alice", 25, "design");
// let user2 = createUser("Bob", 30, "development");

// user1.greet();
// user2.greet();




// // Constructor function

// function Use(name,age,passion){
//     this.name = name;
//     this.age = age;
//     this.passion = passion;             
//     this.greet = function(){
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. My passion is ${this.passion}`);
//     }   
// }           

// let user3 = new Use("Charlie", 28, "photography");
// user3.greet();



// // Class ES6

// class User{
//     constructor(name,passion){
//         this.name =name;
//         this.passsion =passion;

//     }
//     greet(){
//         console.log(`Hello, my name is ${this.name} and my passion is ${this.passsion}`);

//     }


// }

// let user4 = new User("David", "music");
// user4.greet();  


// prototype

// function Account(accountHolder,balance){
//     this.accountHolder =accountHolder;
//     this.balance =balance;

//     // this.deposit =function(balance){
//     //     this.balance +=balance;

//     // }
//     // this.withdraw =function(balance){
//     //     this.balance-=balance;
//     // }


//     Account.prototype.deposit =function(balance){
//         this.balance +=balance;
//     }

//     Account.prototype.withdraw =function(balance){
//         this.balance-= balance;

//     }

// }


// let ressult =new Account ("Eva",234);
// console.log((ressult));

// let result2 =new Account("freak",34435);
// console.log(result2);




// class 

// class Student{
//     constructor(name,age,grade){
//         this.name =name;
//         this.age =age;
//         this.grade=grade;
//     }
//         introduce(){
//             console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and I am in grade ${this.grade}.`);
//         }
//     }

// let r1 = new Student("Maria",30,"A");
// console.log(r1);
// r1.introduce();


class Car{
    constructor(name,color,mileage){
        this.name= name
        this.color =color;
        this.mileage =mileage;

    }
    start(){
        console.log(`${this.name} is starting.`);
    }
    stop(){
        console.log(`${this.name} is stopping.`);
    }

}
let result =new Car("Toyota","red",50000)
let result2 =new Car("BMW","blue",3000);
let result3 =new Car("Buggati","Brown",1000);
console.log(result2);
console.log(result3);

console.log(result);
result.start();
result.stop();
result2.start();
result3.stop();
result2.start();
result3.stop();

  