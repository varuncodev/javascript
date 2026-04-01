// // // create a cclass with private varibale and access it safely

// // class User{
// //     #passwoed;

// //     setPassword(pwd){
// //         this.#passwoed =pwd
// //     }

// //     getpassword(){
// //         return "Access Denied";
// //     }
// // }

// // let user1 = new User();
// // user1.setPassword("mysecretpassword");
// // console.log(user1.getpassword()); // Output: Access Denied  





// // hide internal logic using methods

// class CodffeMachine{
//     mackecoff(){
//         this.#boilwater()
//         this.#bewcoffee()
//         console.log("coffe Ready");
//     }
//     #boilwater(){
//         console.log("water is boiling");
//     }
//     #bewcoffee(){
//         console.log("bewing coffee");
//     }
// }

// let machine = new CodffeMachine();
// machine.mackecoff();
// // machine.#boilwater(); // Error: Private method '#boilwater' is not accessible outside of class 'CodffeMachine'  



// class BankAccount {
//   #balance = 0; // private variable

//   deposit(amount) {
//     if (amount > 0) {
//       this.#balance += amount;
//     }
//   }

//   withdraw(amount) {
//     if (amount <= this.#balance) {
//       this.#balance -= amount;
//       return amount;
//     } else {
//       console.log("Insufficient balance");
//       return 0; 
//     }
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// let acc = new BankAccount();
// acc.deposit(1000);
// console.log(acc.getBalance()); // ✅ 1000

// acc.withdraw(500);
// console.log(acc.getBalance()); // ✅ 500

// acc.withdraw(600);             // ❌ Insufficient balance
// console.log(acc.getBalance()); // ✅ 500



// inheritance

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
    class ElectricCar extends Car{
    constructor(name,color,mileage,batteryCapacity){
        super(name,color,mileage);
        this.batteryCapacity = batteryCapacity;
    }
      charging(){
        console.log(`${this.name} is charging.`);
      }
    }

let mycar =new ElectricCar("tesla","red",100,"98%");
mycar.start();
mycar.charging();       
mycar.stop();
console.log(mycar);
mycar.name = "tesla model 3";
console.log(mycar); 