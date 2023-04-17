/*function animateScript() {
    document.getElementById("image").style.backgroundPosition = 
`-723px -1px`;}*/


let tID;

function animateScript() {
let position = 0; 
const interval = 100;

tID = setInterval ( () => {document.getElementById("image").style.backgroundPosition = 
`-${position}px 0px`;
if (position < 724)
{ position = position + 70;}
else
{ position = 190; }
}
, interval );
} 


const duck = document.querySelector('#duck');

duck.addEventListener('click', ()=> {
  increaseScore();
  moveDuck();
});

const increaseScore = () => {
    const score = document.querySelector("#score-counter").innerHTML;
    
    const scoreHTML = document.querySelector("#score-counter");
    
    let count = Number(score);
    
    scoreHTML.innerHTML = count + 1;
};

function getRandomNum(num) {
    return Math.ceil(Math.random() * (num + 1)) - 1;
  }
  
  const moveDuck = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;  
    duck.style.top = getRandomNum(w) + 'px';
    duck.style.left = getRandomNum(h) + 'px';
     
  }