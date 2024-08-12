let randomnumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector(".but");
const input = document.querySelector("#text");
const guessSlot = document.querySelector(".guesses");
const lastresult = document.querySelector(".lastresult");
const loworhi = document.querySelector(".loworhi");
const resultparas = document.querySelector(".end");

const p = document.createElement("p");
let prevguess = [];
let numguess = 1;
let playgame = true;

if (playgame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(input.value);
        console.log(guess);
        validateguess(guess);
    });
}

function validateguess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number.");
    } else if (guess < 1) {
        alert("Please enter a number greater than 0.");
    } else if (guess > 100) {
        alert("Please enter a number less than 100.");
    } else {
        prevguess.push(guess);
        if (numguess === 11) {
            displayguess(guess);
            displaymessage(`Game Over. The random number was ${randomnumber}.`);
            endgame();
        } else {
            displayguess(guess);
            checkguess(guess);
        }
    }
}

function checkguess(guess) {
    if (guess === randomnumber) {
        displaymessage(`You won! The number was ${randomnumber}.`);
        endgame();
    } else if (guess < randomnumber) {
        displaymessage("Too low!");
    } else if (guess > randomnumber) {
        displaymessage("Too high!");
    }
}

function displayguess(guess) {
    input.value = '';
    guessSlot.innerHTML += `${guess} `;
    numguess++;
    lastresult.innerHTML = `${11 - numguess}`;
}

function displaymessage(message) {
    loworhi.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
    input.value = '';
    input.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame">Start new Game</h2>';
    resultparas.appendChild(p);
    playgame = false;
    newgame();
}

function newgame() {
    const newgamebutton = document.querySelector("#newGame");
    newgamebutton.addEventListener('click', function (e) {
        randomnumber = parseInt(Math.random() * 100 + 1);
        prevguess = [];
        numguess = 1;
        guessSlot.innerHTML = '';
        lastresult.innerHTML = `${11 - numguess}`;
        input.removeAttribute('disabled');
        loworhi.innerHTML = '';
        resultparas.removeChild(p);
        playgame = true;
    });
}
