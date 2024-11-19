// objects can be declared in 2 ways literal and constructor
 
// when objects are declared using literal the object will never be singleton , it will be singleton when declared using constructor

// singleton


//object literals

// Object.create  used for constructor declaration

const mySym = Symbol("key1")

const jsUser = {
    name : "Sid",
    [mySym] : "myKey1", //for key not to be transformed in string use square brackects
    age : 20,
    location : "Jaipur",
    email : "sid@g.com",
    isLoggedin : false,
    lastLoginDay : ["Monday" , "Saturday"]
}
// behind the scene the keys are taken as string

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser[mySym])  // gives type and value


jsUser.email = "samual@g.com"
// Object.freeze(jsUser) after freezing the object no new modifiction can be done in the object

jsUser.email = "sid@g.com"
console.log(jsUser)

console.log(jsUser.email)

jsUser.greeting = function(){
    console.log(`Hello Js user ,  ${jsUser.name}`);
}

console.log(jsUser.greeting())