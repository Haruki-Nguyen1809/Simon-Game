let numberOfDivs = document.querySelectorAll(".color").length;
let buttonColor = ["red", "blue", "green", "yellow"];
let randomButtonColor = []; 
let playerChoose = [];
const levelEl = document.getElementById('level');
const restartEl = document.getElementById('btn-restart');
const startEl = document.getElementById('btn-start'); 

// randomColor();
// makeflash();
for (let i = 0; i < numberOfDivs; i++) {
    document.querySelectorAll(".color")[i].addEventListener('click', function() {
        let clickedColor = this.id;
        playerChoose.push(clickedColor);
        let currentIndex = playerChoose.length - 1;
        if (playerChoose[currentIndex] === randomButtonColor[currentIndex]) {
            if (playerChoose.length === randomButtonColor.length) {
                playerChoose = [];
                levelEl.textContent = `Level ${randomButtonColor.length} completed!`
                randomColor();
                makeflash();
            }
        } else {
            playerChoose = [];
            randomButtonColor = [];
            levelEl.textContent = `You lose, please try again!`
            randomColor();
            makeflash();
        }
    })
}


function randomColor() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomButton = buttonColor[randomNumber];
    randomButtonColor.push(randomButton);
    return randomButton;
}

function makeflash() {
    for (let i = 0; i < randomButtonColor.length; i++) {
        let colorToFlash = randomButtonColor[i];
        let startTime = i * 1000;
    setTimeout(function () {
        document.getElementById(colorToFlash).classList.add('flash');
    },startTime)
    setTimeout(function() {
        document.getElementById(colorToFlash).classList.remove('flash');
    },startTime + 300)
    }
}

restartEl.addEventListener('click', function() {
    playerChoose = [];
    randomButtonColor = [];
    randomColor();
    levelEl.textContent = `The game has restarted, please continue at level ${randomButtonColor.length}.`
    makeflash();
})

startEl.addEventListener('click', function() {
    randomColor();
    makeflash();
})


///Add keyboard interaction later on///