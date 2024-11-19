// this works only in objects
let user = {
    username:"sid",
    age : "20",
    fav_movie:"V for vendetta",
    
    welcomeMessage: function(){
        // console.log(`${this.username} has a favourite movie ${this.fav_movie}`)
        console.log(this)
        // this keyword give current context variable
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this);

function one(){
    username= "sid"
    console.log(this.username);
}

// one()


// Arrow Function

let add = (num1 , num2)=>{
    return (num1+num2);
}
// *****************implicit return****************

let sub = (num1,num2)=>num1-num2

// object return

let obj = (name1)=>({name :`hello ${name1}`})

const arr = () =>{
    let username = "sid"
    console.log(this.username);
}

// arr()

console.log(add(1,2))
console.log(sub(17,7))
console.log(obj("sid"));

// ------college---------

const person = {
    name : "xyz",
    Age:35,
    salary:100045.50
}

const {name, Age , salary} = person
console.log(name);
console.log(Age);
console.log(salary);


// let hello = ()=>{
//     console.log("helo")
// }
// hello()