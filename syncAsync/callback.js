// callback is always a function 
// the taking inside another function is known as higher order function
// taking function  as in arugument it it is knows callback


// function student(name,callback){
//     callback(name)

// }
// function printName(name){
//     console.log("Hello !" ,name);

// }

// student("varun", printName)



// function calculate(a,b,callback){
//     callback(a,b)

// }

// function sum(a,b){
// console.log(a+b);
// }

// function subtract(a,b){
//     console.log(a-b);
// }

// function multiply(a,b){
//     console.log(a*b);
// }

// function power(a,b){
//     console.log(a**2);
// }

// calculate(4,6,subtract)

// calculate(4,6,multiply)


// console.log("1 data is fetching");

// function fetchdata(processtask){
//     setTimeout(()=>{
//         console.log("2 data is fetched");
//         processtask()
//     },3000)
// }

// function prsk(){
//     console.log("3 processing the data");

// }

// fetchdata(prsk)


// console.log("4 same other task.....");



// Example 4


// function getdata(dta,callback){
//       setTimeout(() => {
//         console.log(dta);
//         if(callback){
//             callback()
//         }
//       },3000);
// }


// console.log("1 data fetched");
// getdata("data 2",()=>{
//     console.log("fetching 3rd data");
//     getdata("3rd data",()=>{
//         getdata("4th data ")
//     })
// })




function getuser(callback){
    const data =new XMLHttpRequest();
    data.open('GET','https://69cbb82e0b417a19e07b1b1f.mockapi.io/todoapp/v1/todos')

    data.onload =function(){
        if(data.status ===200){
            const user =JSON.parse(data.responseText)
            callback(null,user)
            
        }else{
            callback(`Error: ${data.status}`)

        }
    }

data.onerror =function (){
    callback("network error")
}
data.send()
}


function showdata(error ,data){
    if(err){
        console.log("FAiled",error);
    }
    else{
        console.log("Succcess",data);
    }
}


// example 5 async

console.log("fetch data");
setTimeout(()=>{
    console.log("d1");
    setTimeout(()=>{
        console.log("d2");
        setTimeout(()=>{
            console.log("d3");
        })
    })
})