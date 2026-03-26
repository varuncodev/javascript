//singleton 


// obect literals
const symn = Symbol("symn")
let person ={
    name:"varun",
    [symn]:"sylmn",
    age:23,
    city:"jaipur",                  
    isloggedin:false
}

    console.log(person.name);
    console.log(person["age"])
    console.log(typeof person[symn])

    person.name ="ronny"
    console.log(person.name);
    // Object.freeze(person) // to make object immutable
    console.log(person);
    person.greeting =function(){
        console.log("hello dosto!");
    }

    console.log(person.greeting());

    
    person.greet2 =function(){
        console.log("hello ",`${this.name}`);
    }
    console.log(person.greet2());