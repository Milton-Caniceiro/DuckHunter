function flyingDuck() {
    let position = -130;
    const interval = 100;
    const diff = 40;

    const duckID = setInterval(() => {
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

function dogFindingDuck() {
    let position = -73;
    const interval = 210;
    const diff =60;
  
      dogID = setInterval(() => {
          document.getElementById("dog-image2").style.backgroundPosition = `${position}px -73px`;
  
          if (position > -135) {
              position = position - diff;
          } else {
              position = -74;
          }
      }, interval);
}

function jumpingDog() {
    let position = -73;
    const interval = 210;
    const diff =60;
  
      dogID = setInterval(() => {
          document.getElementById("dog-image3").style.backgroundPosition = `${position}px -73px`;
  
          if (position > -135) {
              position = position - diff;
          } else {
              position = -74;
          }
      }, interval);
  }

const dogLaugh = document.getElementById('dog-laugh');

dogLaugh.addEventListener('animationend', () => {
  dogLaugh.style.display = 'none';
});
flyingDuck();
runningDog();
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

};