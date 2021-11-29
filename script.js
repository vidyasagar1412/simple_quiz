//assigning variables

const jokeEl=document.getElementById("joke");
const jokeBtn=document.getElementById("joke-btn");


jokeBtn.addEventListener('click',generateJoke)

generateJoke()

async function generateJoke(){
    const res= await fetch('https://icanhazdadjoke.com',{
        headers:{
            accept:'application/json'
        }
    })

const data =await res.json()
console.log(data)

jokeEl.innerHTML=data.joke
}