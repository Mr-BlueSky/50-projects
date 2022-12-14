const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click',getJoke)

getJoke()

//异步函数  异步请求
async function getJoke(params){
    const config = {
        headers:{
            Accept: 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com',config)

    const data = await res.json()

    jokeEl.innerHTML = data.joke
}