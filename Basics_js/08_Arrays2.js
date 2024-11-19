const marvel_heroes = ["thor" , "ironman" , "spiderman"]
const dc_heros = ["superman" , "flash" , "batman"]

// marvel_heroes.push(dc_heros)

// console.log(marvel_heroes)
// console.log(marvel_heroes[3][0])

// let  allHeroes = marvel_heroes.concat(dc_heros)
// console.log(allHeroes)


const allHeroes = [...marvel_heroes,...dc_heros]
console.log(allHeroes)


const another_array = [1,2,3,[4,5,6] , 7, [6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.from("hitesh")) 

console.log(Array.from({name:"hitesh"})) 


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))

