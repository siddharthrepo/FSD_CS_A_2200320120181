// let a = [11,12,31,41,51]

// for(let i of a){
//     console.log(i)
// }

let greetings = "Hello world!"

// for(let i of greetings){
//     console.log(i)
// }

// Map

const map = new Map()
map.set('in' , 'india')
map.set('fr' , 'france')
map.set('fr' , 'france')
map.set('rus' , "russia")
console.log(map)

// for(let i of map){
//     console.log(i)
// }

for(let[i,j] of map){                //destructure of array
    console.log(`${i} -> ${j}`);     
}

const obj = {
    g1 : "NFS",
    g2 :"COD"
}
// objects are not iterable with of method

// objects are iterated using in keyword

for(let i in obj){
    // console.log(obj[i]);
}


ar = ["hi","hello","howdy",4,5,12]

for(let i in ar){
    // console.log(ar[i]);
}

// for each loop

const coding = ["js" , "python" , "go" ,"cpp"]

coding.forEach(function(val){
    // console.log(val);
})

coding.forEach((item)=>{
    // console.log(item);
})

function print(s){
    console.log(s);
}

// coding.forEach(print)

coding.forEach((item,index , arr)=>{
    console.log(item, index, arr);
})

//----------------------obj in arrays---------------

const myCoding = [{
    languageName : "Python",
    languageFileName :"py"
    },
    {
        languageName : "Go",
        languageFileName :"go"
    },
    {
        languageName : "JavaScript",
        languageFileName :"js"
    }]

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
})