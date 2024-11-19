// generate a random color 

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i =0 ; i<6 ;i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}   
let intervalId;
let changebgColor = function(){
    document.body.style.backgroundColor = randomColor();
}
const startChangingColor = function(){
    intervalId = setInterval(changebgColor , 1000);
    // intervalId = null;
};
const stopChangingColor = function(){
    clearInterval(intervalId)
};

document.querySelector('#stop').addEventListener('click' , stopChangingColor)
document.querySelector('#start').addEventListener('click' , startChangingColor)