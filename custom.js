const duck = document.querySelector('#duck-image');

duck.addEventListener('click', () => {
    increaseScore();
});

const increaseScore = () => {
    const score = document.querySelector("#score-counter").innerHTML;

    const scoreHTML = document.querySelector("#score-counter");

    let count = Number(score);

    scoreHTML.innerHTML = count + 1;
};