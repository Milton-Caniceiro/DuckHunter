/*
function flyingDuck() {
    let position = -130;
    const interval = 100;
    const diff = 40;

     setInterval(() => {
        document.getElementById("duck-image").style.backgroundPosition = `${position}px -121px`;

        if (position > -200) {
            position = position - diff;
        } else {
            position = -130;
        }
    }, interval);
}

function horizontalFlightDuck() {
    let positionX = 0;
    const interval = 100;
    const diffX = 10;
    const height = 100;

    let tID = setInterval(() => {
        positionX += diffX;
        const fieldWidth = document.getElementById('field').offsetWidth;
        const spriteWidth = document.getElementById('duck-image').offsetWidth;
        const maxPositionX = fieldWidth - spriteWidth;

        if (positionX > maxPositionX) {
            positionX = 0;
        }
        document.getElementById("duck-image").style.left = `${positionX}px`;
        document.getElementById("duck-image").style.top = `${height}px`;
    }, interval);
}


flyingDuck();
horizontalFlightDuck();

const dogImage = document.getElementById("dog-walk");

dogImage.addEventListener("mymove", function() {
    dogImage.style.animation = "none";
});



const duck= document.querySelector('#duck-image');

const getRandomNum = (num) => {
    return Math.floor(Math.random() * Math.floor(num));
  }
  
const moveDuck = () => {
    const w = 1000
    const h = 500;  
    duck.style.top = getRandomNum(w) + 'px';
    duck.style.left = getRandomNum(h) + 'px';
     
}
 // export {flyingDuck, horizontalFlightDuck, runningDog, jumpingDog, removeDog, moveDuck };
