const duck = document.querySelector('#duck-image');

document.addEventListener('click', (event) => {
  const initialX = event.clientX;
  const initialY = event.clientY;
});

const increaseScore = () => {
  const score = document.querySelector('#score-counter').innerHTML;

  const scoreHTML = document.querySelector("#score-counter");

  let count = Number(score);

  scoreHTML.innerHTML = count + 1;
};
