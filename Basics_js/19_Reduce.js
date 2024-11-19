const myNums = [1,2,3]

// accumlator is the initian value
// const total =  myNums.reduce(function (accumlator , currentValue) {
//     console.log(`acc: ${accumlator} , curr : ${currentValue}`);
//     return accumlator+currentValue

// } ,10)
// here 10 is set as accumlator

//  same using arrow function

const total = myNums.reduce((acc,crr) => (acc+crr), 0)

console.log(total);


// practical example
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

let t = shoppingCart.reduce((acc,item)=>(acc+item.price),0)
console.log(t);