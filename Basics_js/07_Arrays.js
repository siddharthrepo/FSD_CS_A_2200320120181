
const myArr = [0,1,2,3,4]
console.log(myArr)

let myarr2 = new Array(100 ,200,300,400)
console.log(myarr2)


console.log(myArr[2])

// Array methods

myArr.push(2)
console.log(myArr)
myArr.pop()
console.log(myArr)

myArr.unshift(9) // inserts element at the first
console.log(myArr)
myArr.shift() // removes first element
console.log(myArr)

console.log(myArr.includes(9))
console.log(myArr.indexOf(2))

let newArr =  myArr.join('')
console.log(newArr)

// slice , splice

let m = [1,2,3,4,5,6]

console.log("A" , m)
console.log(m.slice(1,3))

console.log("B" , m)
console.log(m.splice(1,3))

console.log("C" , m)  // splice changes the array it removes the selected element while splicing


