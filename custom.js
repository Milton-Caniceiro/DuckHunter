
let bullet = 5;
//const pew = document.getElementById("shot");

const decreaseBullets = () => {
    const bullet = document.querySelector("#bullet-counter").innerHTML;

    const bulletHTML = document.querySelector("#bullet-counter");

    let count = Number(bullet);

    bulletHTML.innerHTML = count - 1;
};

const increaseScore = () => {
    const score = document.querySelector("#score-counter").innerHTML;

    const scoreHTML = document.querySelector("#score-counter");

    let count = Number(score);

    scoreHTML.innerHTML = count + 100;
};

const duck = document.querySelector('#duck-image');

duck.addEventListener('click', () => {
    //pew.play();
    fallDown();
    setTimeout(dogWithDuck, 3050)
    setTimeout(hiddeDogWithDuck, 6100);
    increaseScore();
    decreaseBullets();
});

const img = document.querySelector('.container');

img.addEventListener('click', () => {
    //pew.play();
    showDogLaughing();
    decreaseBullets();
    setTimeout(hiddeDogLaughing, 2000);
   
});

const showDogLaughing = ()  => {
    const dogLaughing = document.getElementById('dogLaugh');
    dogLaughing.style.display = 'block';
}

const hiddeDogLaughing = ()  => {
    const dogLaughing = document.getElementById('dogLaugh');
    dogLaughing.style.display = 'none';
}

const dogWithDuck = () =>{
    const dogWithDuck = document.getElementById('dogWithDuck');
    dogWithDuck.style.display = 'block';
}

const hiddeDogWithDuck = () => {document.getElementById('dogWithDuck');
    const dogWithDuck = document.getElementById('dogWithDuck');
    dogWithDuck.style.display = 'none';
}

function fallDown() {
    const duckImage = document.getElementById("duck-image");
    const deadDuck = document.getElementById("dead-duck");
    const fallingDuck = document.getElementById("falling-duck");
    deadDuck.style.top = `${parseInt(duckImage.style.top)}px`;
    deadDuck.style.left = `${parseInt(duckImage.style.left)}px`;
    fallingDuck.style.top = `${parseInt(duckImage.style.top)}px`;
    fallingDuck.style.left = `${parseInt(duckImage.style.left)}px`;
    duckImage.style.display = "none";
    deadDuck.style.display = "block";
    setTimeout(hideDeadDuck, 200);
    setTimeout(showFallingDuck, 200);
    
    let positionY = parseInt(duckImage.style.top);
    const interval = 50;
    const diffY = 11;
    let tID = setInterval(() => {
        positionY += diffY;
        const fieldHeight = document.getElementById('field').offsetHeight;
        const spriteHeight = fallingDuck.offsetHeight;
        const maxPositionY = fieldHeight - spriteHeight;
        if (positionY > maxPositionY) {
            clearInterval(tID);
        }
        fallingDuck.style.top = `${positionY}px`;
    }, interval);
    setTimeout(hideFallingDuck, 3000);
}

const showFallingDuck = () => {
    const fallingDuck = document.getElementById('falling-duck');
    fallingDuck.style.display = 'block';
  };
  const hideDeadDuck = () => {
    const deadDuck = document.getElementById('dead-duck');
    deadDuck.style.display = 'none';
  };
  const hideFallingDuck = () => {
    const fallingDuck = document.getElementById('falling-duck');
    fallingDuck.style.display = 'none';
  };

function gameOver(){
    if(bullet<=0){
        
    }
}