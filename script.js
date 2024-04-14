let btnRandom = 0;

function getBtnRandom(nrOfButtons) {
    btnRandom = Math.floor(Math.random() * nrOfButtons) + 1;
}

function checkWinner(buttonId) {
    if (btnRandom === buttonId) {
        document.getElementById("rezult").innerText = "CONGRATULATIONS!! YOU CHOOSE THE CORRECT BUTTON";
    } else {
        document.getElementById("rezult").innerText = "TRY AGAIN";
    }
}

function newGame() {
    let element = document.querySelectorAll('#buttonsContainer, #rezult');
    let newGameBtn = document.getElementById ("newGame");
    element.forEach(function(element) {
        element.innerHTML = ' ';
        if (newGameBtn){
            const parentEl = document.getElementById("Game");
            parentEl.removeChild(newGameBtn);
        }
    });
}
function createNumberBtn() {
    let nrOfButtons = document.getElementById("nrOfBtn").value;
    getBtnRandom(nrOfButtons);
    let buttonsContainer = document.getElementById("buttonsContainer");
    for (let i = 1; i <= nrOfButtons; ++i) {
        (function(buttonId) {
            const button = document.createElement("button");
            button.textContent = `Button`;
            button.addEventListener('click', function() {
                checkWinner(buttonId);
            });
            buttonsContainer.appendChild(button);
        })(i);
    }
    const button = document.createElement("button");
    button.textContent = `New Game`;
    button.id = 'newGame';
    button.addEventListener('click', function() {
        newGame();
    });
    Game.appendChild(button);
}


