const questions = [
    {
        "Que": "Which of the following is a markup language ?",
        "a": "HTML",
        "b": "CSS",
        "c": "JavaScript",
        "d": "PHP",
        "correct": "a"
    },
    {
        "Que": "CSS stands for ~",
        "a": "Cash Style Sheet",
        "b": "Cash Specific Sheet",
        "c": "Cascading Style Sheet",
        "d": "Company Sucees Sheet",
        "correct": "c"
    },
    {
        "Que": "How many heading tags in HTML ?",
        "a": "Five",
        "b": "Eight",
        "c": "Twelve",
        "d": "Six",
        "correct": "d"
    },
]

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const queBox = document.querySelector("#queBox");
const optns = document.querySelectorAll(".optns");
const loadQuestion = () => {
    if(index === total){
        return endQuiz();
    }
    reset ();
const data = questions[index];
queBox.innerText = `${index + 1}) ${data.Que}`;
optns[0].nextElementSibling.innerText = data.a;
optns[1].nextElementSibling.innerText = data.b;
optns[2].nextElementSibling.innerText = data.c;
optns[3].nextElementSibling.innerText = data.d;

}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans === data.correct){
        right++;
    } 
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optns.forEach(
        (input) => {
            if (input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optns.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.querySelector("#box").innerHTML = `
    <div style="text-align:center">
    <h3>Thank you for participating in my Quiz</h3>
    <h2>${right} / ${total} are correct</h2>
    </div> `
}


// initial call---
loadQuestion();