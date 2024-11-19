// falsy values -: some values are considered false

//falsy values -: false , 0 , -0, BigInt 0n , "" , null , undefined , NaN


const userEmail = " "

if(userEmail){
    console.log("Got user Email");
}
else{
    console.log("Don't have a user");
}

// All values except falsy values are truthy values
// like "0" , "false" , " " ,[],{}, function(){}


// check empty array

let arr = []
if (arr.length == 0){
    console.log("array is empty");
}

// check empty object
let emp = {}
if (Object.keys(emp).length == 0){
    console.log("empty bject")
}