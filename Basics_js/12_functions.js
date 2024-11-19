function addTwoNum(num1 , num2){
    return num1+num2
}

// console.log(addTwoNum("fou" , "gol"))
console.log(addTwoNum(3 , 5))

function loginUserMessage(username){
    if(username !== undefined){
        return `${username}  has entered`
    }
    else{
        return "pls enter a valid username"
    }

}

console.log(loginUserMessage("sid"));
console.log(loginUserMessage());

function cartprice(...num1){
    let sum = 0
    for(let i = 0 ;i<num1.length ; i = i+1){
        sum = sum + num1[i]
    }
    return sum
}

console.log(cartprice(100,200,300));


const user = {
    username : "hitesh",
    price:199
}

function handleObject(anyobject){
    return `user is ${anyobject.username} and price is ${anyobject.price}`
}

console.log(user)


