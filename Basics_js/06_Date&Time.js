let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

// let created_date = new Date(2023, 0 , 23)
// let created_date = new Date(2023, 0 , 23 , 5,3)
// let created_date = new Date("2023-01-23") // yy-mm-dd
let created_date = new Date("01-13-24") // mm-dd-yy
console.log(created_date.toLocaleString())


// let myTimeStamp = Date.now()
// console.log(myTimeStamp)

// console.log(created_date.getTime())

let new_date = new Date()
console.log(new_date.getHours())
console.log(new_date.getMonth())
