// create a function that return the last element


function lastElement(localArray){
    return localArray.length -1

}
let arr =[2,34,5,7,4]
let lastElements = lastElement(arr)
console.log(lastElements);


// find the combination of two array

let arr1 = [1,2,3]
let arr2 = [4,5,6]
let combine = arr1.concat(arr2);
console.log(combine);
console.log(arr1,arr2);



//  create a function that return the first element of an array
function firstElement(localArray){
    return localArray[0]
}       

// generate a random number between 1 and 18
function randomNumber(){
    return Math.floor(Math.random()*18) + 1;
}

console.log(randomNumber())




// create a function  that takes  an array  containing booth number and strings and return  new array with only the strings


let arr3  =[1,2,4,67, "dfg", "sdf", "sdfg", 34, 56, 78, "sdfg", "sdfg"]
function filterStrings(localArray){
    let newArray = []       
    for(let i = 0; i < localArray.length; i++){
        if(typeof localArray[i] === "string"){
            newArray.push(localArray[i])
        }
    }
    return newArray
}       
let stringArray = filterStrings(arr3)
console.log(stringArray);


// or

let newArr =arr3.filter((element=>{
    if(typeof element === "string"){
        return element;
    }
    else{
        return null;
    }
}))

console.log(newArr);





// Find the maximumm number in array
// by sorting
let arr4 = [1,2,3,4,5,20,7,8,9]
 let found =arr4.sort((a,b)=>{
    return b-a
})
console.log(found[0]);

// by loop
let max = arr4[0]
for(let i = 1; i < arr4.length; i++){
    if(arr4[i] > max){      
        max = arr4[i]
    }   
}
console.log(max);

// inbuilt method
let max1 =Math.max(...arr4)
console.log(max1)


// write a function that returns the length of a given object (number of keys)


let object ={
    name:"varun",
    age:23,
    city:"delhi"
}
function objectlen(object)
{
    return Object.keys(object)
}
// let lengthOfObject =objectlen(object)
// console.log(lengthOfObject);
console.log(objectlen(object));
// or--------------------
function objectlen1(object){
    let count = 0;      
    for(let key in object){
        count++
    }                   
    return count
}
console.log(objectlen1(object));

// or

function objectKeys(object){
    let keys = []       
    for(let key in object){
        keys.push(key)
    }                   
    return keys
}       
console.log(objectKeys(object));



// in an array of object filter out those object whiich has gender value male




let arrofObjects =[{
    name:"varun",
    gender:"male"
}, {
    name:"priya",
    gender:"female"
}, {
    name:"rohit",
    gender:"male"
}   ]

let arrm = arrofObjects.filter((element)=>{
    if(element.gender ==="male"){
       return element

    }
}
)
        console.log(arrm);





        // 