//const h1 = document.querySelector('h1');
//h1.style.color = randomRGB();

// use function to make random color.

function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
// rgb colors are 3numbers from 0 - 255, rgb(255,255,255) and multiply by 256 to include 255 and do Math.floor to round to a whole number. 

// use setInterval to repeat 
//setInterval(function(){
//    h1.style.color = randomRGB();
//}, 1000); 

const letters = document.querySelectorAll('.letter');

setInterval(function(){
    for(let letter of letters){
        letter.style.color = randomRGB();
    } 
}, 1000);
