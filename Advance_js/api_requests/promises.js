const promiseOne = new Promise(function(resolve , reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve();
    },  1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("async 2 resolved")
})


const promise3 = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username:"Sid" , email:"siddharthraturi12@gmail.com"})
    } , 1000)
})

promise3.then(function(user){
    console.log(user)
})


const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"sid" , password:"123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

const username = promiseFour.then((user) => {
    console.log(user);
    return user.username
})

// console.log(username)

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally("the promise is either rejected or resolved")

const promise5 = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"js" , password:"123"})
        } else{
            reject('ERROR:JS went wrong')
        }
    }, 1000)
})


async function consumePromise5() {
    try{
        const response = await promise5;
        console.log(response);
    } catch (error){
        console.log(error);
    }
}

consumePromise5()

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log("data",data);

//     } catch(error){
//         console.log("E:",  error)
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))