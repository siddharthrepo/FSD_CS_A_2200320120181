// == checks only value while === also checks data type
let temperature = 41
if (temperature == 40 ){
    console.log("fine");
}
else if (temperature <40){
    console.log("too cold");
}
else{
    console.log("too hot");
}

const userloggedIn = true
const userdebit = true

if(userloggedIn == true && userdebit){
    console.log("authorized to buy");
}

const userloggedInemail = true
const userloggedIngooglr = true
if(userloggedInemail == true ||  userloggedIngooglr == true){
    console.log("loggedin");
}
// if(temperature >35) console.log("hot") -----single line if else ,  nat a good practice

const month = 1
switch(month){
    case 1:
        console.log("jan");
        break
    case 2:
        console.log("feb");
        break
    case 3:
        console.log("march");
        break
    case 4:
        console.log("april");
        break
    default:
        console.log("not first quarter");
}

// Nullish Coalescing Operator (??): null undefined

let val1

// val1 = null ?? 5
// val1 = 10??undefined
val1 = null ?? 5 ?? 10 ?? 2

console.log(val1);


// Ternary operator
    // condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");