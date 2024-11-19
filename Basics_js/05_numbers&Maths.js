const score = 400
console.log(score)

let balance = new Number(100)
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(3))

let float = 123.6567
console.log(float.toPrecision(3))


let num = 100000000000         //places comma's  , default is in american way
console.log(num.toLocaleString('en-IN')) //in the indian way

// ----------------------- Maths ------------------------
console.log("Maths Module JS")
console.log(Math.abs(-9))
console.log(Math.round(3.7))
console.log(Math.ceil(4.1)) // if value greater than 4 it will take 5
console.log(Math.floor(4.1))// takes lower value = 4
console.log(Math.max(1,2,43,223,45,1))
console.log(Math.min(1,2,43,223,45,1))

// ------------random
console.log(Math.random())
console.log(Math.random()*10 +1)
console.log(Math.floor(Math.random()*10 +1))

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)+ min))