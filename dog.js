/* eslint-disable require-jsdoc */
function runningDog() {
  let position = -5;
  const interval = 100;
  const diff = 60;
  const barkingDog = document.getElementById('barkingDog');
  const dogElement = document.getElementById('dog-walk');
  barkingDog.play();

  const dogID = setInterval(() => {
    dogElement.style.backgroundPosition = `${position}px -3px`;

    if (position > -240) {
      position = position - diff;
    } else {
      position = -5;
    }
  }, interval);
}

function jumpingDog() {
  let position = -59;
  const interval = 210;
  const diff = 70;

  const dog2Element = document.getElementById('dog-jump');
  dog2Element.style.display = 'block';
  const dog2ID = setInterval(() => {
    dog2Element.style.backgroundPosition = `${position}px -59px`;

    if (position > -67) {
      position = position - diff;
    } else {
      clearInterval(dog2ID);
      dog2Element.remove();
    }
  }, interval);
}

function removeDog() {
  const dogToRemove = document.getElementById('dog-walk');

  const parentElement = dogToRemove.parentNode;

  parentElement.removeChild(dogToRemove);
}

export {runningDog, jumpingDog, removeDog};
