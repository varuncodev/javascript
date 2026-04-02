// let n =new Promise((resolve,reject)=>{
//     // resolve("promise resolve h ye");
//     reject("reject ho gya");

// })

// console.log(n);



let data = new Promise((resolve,reject)=>{
    console.log("this is promise");
    // resolve({
    //     name:"varun sharma"
    // })

    reject("something wrong")

})
// .then and .catch ek sathn lagana hota hai
// console.log(data);
data.then((res)=>{
console.log(res);
}).catch((err)=>{
    console.log(err);
})

