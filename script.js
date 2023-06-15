let score = 0;
let correctAnswer = null;

function getNextQuestion() {
    fetch('https://sleepy-dove-handbag.cyclic.app/question')
    .then(response => response.json())
    .then(data => {
        correctAnswer = data.answer;
        document.getElementById('question').innerText = data.message;
        let optionsHtml = '';
        data.options.forEach((option, index) => {
            optionsHtml += `<button id="option${index}" onclick="answer(${index})">${option}</button>`;
        });
        document.getElementById('options').innerHTML = optionsHtml;
    });
}

function answer(index) {
    const buttons = document.getElementsByTagName('button');
    for(let i = 0; i < buttons.length; i++){
        buttons[i].style.backgroundColor = i === correctAnswer ? 'green' : 'red';
        buttons[i].disabled = true;
    }
    if(index === correctAnswer) {
        document.body.style.backgroundColor = "green";
        score++;
    } else {
        document.body.style.backgroundColor = "red";
    }
    document.getElementById('score').innerText = "Score: " + score;
    setTimeout(getNextQuestion, 2000); // Adds a delay of 2 seconds before the next question
}

getNextQuestion();
