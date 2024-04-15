let btnRandom = 0;

function setBtnRandom(nrOfButtons) {
    btnRandom = Math.floor(Math.random() * nrOfButtons) + 1;
}

function checkWinner(buttonId) {
    if (btnRandom === buttonId) {
        document.getElementById("result").innerText = 
        "CONGRATULATIONS!! YOU CHOOSE THE CORRECT BUTTON";
    } else {
        document.getElementById("result").innerText = "TRY AGAIN";
    }
}

function newGame() {
    let element = document.querySelectorAll('#buttonsContainer, #result');
    let newGameBtn = document.getElementById("newGame");
    element.forEach(function(el) {
        el.innerHTML = '';
    });
    if (newGameBtn) {
        const parentEl = document.getElementById("Game");
        if (parentEl.contains(newGameBtn)) {
            parentEl.removeChild(newGameBtn);
        }
    }
}


function createNumberBtn() {
    let nrOfButtons = document.getElementById("nrOfBtn").value;
    setBtnRandom(nrOfButtons);
    let buttonsContainer = document.getElementById("buttonsContainer");
    for (let i = 1; i <= nrOfButtons; ++i) {
        const button = document.createElement("button");
        button.textContent = 'Button';
        button.param = i;
        button.addEventListener('click', function() {
            checkWinner(button.param);
        });
        buttonsContainer.appendChild(button);
    }
    const button = document.createElement("button");
    button.textContent = 'New Game';
    button.id = 'newGame';
    button.addEventListener('click', function() {
        newGame();
    });
    Game.appendChild(button);
}


