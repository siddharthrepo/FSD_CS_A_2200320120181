
let nums = [1,2,3,4,5,6,7,8,9]

const newNums = nums.map((n) =>(n+10))

console.log(newNums)

// chaining -: Here multiple maps can be used where the scuccessing map will get the previous map value

// let newInts = nums.map((num)=>(num*10)).map((num)=>(num+1))
let newInts = nums
                .map((num)=>(num*10))
                .map((num)=>(num+1))
                .filter((num)=>(num>50))
                
console.log(newInts);

