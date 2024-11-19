// immediatley invoke function expression

// 1. we use iife to prevent gloabal scope pollution
// 2. iife are function that gets directly executed

// named iife
(function conn(database){
    console.log(`${database} DB connected`);
})("sql");

// ******************************** TWO MAKE SECOND IIFE PUT SEMICOLON AFTER THE PREVIOUS IIFE

// first  parenthesis() is for function writting and the second parenthesis for call

// iife with arrow functions OR nameless iife
((database)=>{
    console.log(`${database} db connected`);
})("mongodb")