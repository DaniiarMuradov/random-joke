const button = document.querySelector(".jokeBtn");
const joke = document.querySelector(".jokeText");

const renderJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        joke.innerHTML = data.value;
    })
}

button.addEventListener("click", renderJoke);