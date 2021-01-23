const p1 = {
    score:  0,
    button: document.querySelector('#p1Btn'),
    display: document.querySelector('#p1'),
};
const p2 = {
    score: 0,
    button: document.querySelector('#p2Btn'),
    display: document.querySelector('#p2'),
};

const resetBtn = document.querySelector('#reset');
const select = document.querySelector('#playTo');
const input = document.querySelectorAll('input');

const p1Name = document.querySelector('#p1Name');
const p2Name = document.querySelector('#p2Name');

let winningScore = 3;
let isGameOver = false;



p1Name.addEventListener('input', () => {
    if (p1Name.value) {
        p1.button.innerText = `+1 ${p1Name.value}`;
    } else {p1.button.innerText = "+1 Player One";
}
});
p2Name.addEventListener('input', () => {
    if (p2Name.value) {
        p2.button.innerText = `+1 ${p2Name.value}`;
    } else {p2.button.innerText = "+1 Player Two";
}
});

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
    
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.button.disabled = true;
            opponent.button.disabled = true;
           
       };
       player.display.textContent = player.score;
       }
}

p1.button.addEventListener('click', () => updateScores(p1, p2));
p2.button.addEventListener('click', () => updateScores(p2, p1));

 select.addEventListener('change', function() {
    winningScore = parseInt(this.value)
    reset();
   
 });

 resetBtn.addEventListener('click', reset)

 function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger')
        p.button.disabled = false;

    }  
}

