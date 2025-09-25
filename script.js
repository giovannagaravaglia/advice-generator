const adviceTitle = document.getElementById('adviceTitle')
const advice = document.getElementById('advice');
const btn = document.getElementById('btn')


function randomAdvice () {
    fetch('https://api.adviceslip.com/advice')
    .then (response => response.json())
    .then (data =>{
        adviceTitle.textContent =`Advice #${data.slip.id}`
        advice.textContent = `"${data.slip.advice}"`
        })
}

randomAdvice ();

btn.addEventListener('click', randomAdvice)


