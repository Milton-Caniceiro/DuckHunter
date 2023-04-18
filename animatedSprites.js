let duckID, dogID;

function stopAnimate() {
    clearInterval(duckID);
    clearInterval(dogID);
}

function flyingDuck() {
    let position = -130;
    const interval = 100;
    const diff = 40;

    duckID = setInterval(() => {
        document.getElementById("duck-image").style.backgroundPosition = `${position}px -121px`;

        if (position > -200) {
            position = position - diff;
        } else {
            position = -130;
        }
    }, interval);
}

function flyingDuck2() {
    let position = -130;
    const interval = 100;
    const diff = 40;

    duckID = setInterval(() => {
        document.getElementById("duck-image2").style.backgroundPosition = `${position}px -121px`;

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

function runningDog() {
  let position = -5;
  const interval = 100;
  const diff = 60;

    dogID = setInterval(() => {
        document.getElementById("dog-image").style.backgroundPosition = `${position}px -3px`;

        if (position > -240) {
            position = position - diff;
        } else {
            position = -5;
        }
    }, interval);
}

/*function jumpingDog() {
    let position = -5;
    let spriteIndex = 40;
    const interval = 100;
    const diff = 60;
  
    dogID = setInterval(() => {
      const dogImage = document.getElementById("dog-image2");
      dogImage.style.backgroundPosition = `${position}px -1px`;
      //dogImage.classList.remove(`sprite${spriteIndex}`);
  
      if (position > -240) {
        position = position - diff;
      } else {
      
      }
    }, interval);
  }*/

flyingDuck();
flyingDuck2();
runningDog();

horizontalFlightDuck();

const dogImage = document.getElementById("dog-image");

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