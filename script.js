let score = 0;
let correctAnswer = null;

function getNextQuestion() {
    fetch('https://sleepy-dove-handbag.cyclic.app')
    .then(response => response.json())
    .then(data => {
        correctAnswer = data.answer;
        document.getElementById('question').innerText = data.message;
        let optionsHtml = '';
        data.options.forEach((option, index) => {
            optionsHtml += `<button onclick="answer(${index})">${option}</button>`;
        });
        document.getElementById('options').innerHTML = optionsHtml;
    });
}

function answer(index) {
    if(index === correctAnswer) {
        document.body.style.backgroundColor = "green";
        score++;
    } else {
        document.body.style.backgroundColor = "red";
    }
    document.getElementById('score').innerText = "Score: " + score;
    getNextQuestion();
}

getNextQuestion();
