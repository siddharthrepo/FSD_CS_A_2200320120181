// objects are created using literals here
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isloggedIn = false


// console.log(tinderUser);

const regularUser = {
    email : "some@g.com",
    fullname : {
        userfullname : {
            firstname : "siddharth",
            lastname : "raturi"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}
const obj4 = {5:"a" , 6:"b"}

// const obj3  = {obj1 , obj2 , obj4}

// const obj3 = Object.assign({} , obj1 , obj2 , obj4)

const obj3 = {...obj1, ...obj2 , ...obj4}

console.log(obj3)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
